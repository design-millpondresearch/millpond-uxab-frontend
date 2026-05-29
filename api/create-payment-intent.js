import Stripe from 'stripe';

/* eslint-env node */

/**
 * Vercel serverless function: POST /api/create-payment-intent
 *
 * Creates a Stripe Subscription (with an incomplete first payment) for the
 * selected WorkBench tier.  Requires STRIPE_PERSONAL_PRICE_ID and
 * STRIPE_BUSINESS_PRICE_ID environment variables.
 */
export default async function handler(req, res) {
  // CORS — restrict to known origin if configured, otherwise reflect
  // the request origin (safer than '*').
  const allowedOrigin = process.env.ALLOWED_ORIGINS || req.headers.origin || '';
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('Stripe secret key not configured');
    return res.status(500).json({ error: 'Payment processing is not configured.' });
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2024-12-18.acacia' });

  const { tier } = req.body || {};

  if (!tier || !['personal', 'business'].includes(tier)) {
    return res.status(400).json({ error: 'Invalid tier. Must be "personal" or "business".' });
  }

  try {
    const priceId =
      tier === 'personal'
        ? process.env.STRIPE_PERSONAL_PRICE_ID
        : process.env.STRIPE_BUSINESS_PRICE_ID;

    if (!priceId) {
      console.error(`Stripe Price ID not configured for tier: ${tier}`);
      return res.status(500).json({ error: 'Payment processing is not configured for this plan.' });
    }

    const customer = await stripe.customers.create({
      metadata: { tier, product: 'workbench' },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    const clientSecret = subscription.latest_invoice?.payment_intent?.client_secret;

    if (!clientSecret) {
      console.error('Failed to create subscription payment intent');
      return res.status(500).json({ error: 'Unable to initialize payment. Please try again.' });
    }

    return res.status(200).json({ clientSecret });
  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: 'Payment processing failed. Please try again later.' });
  }
}
