import { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import EnterpriseModal from './EnterpriseModal';
import PaymentModal from './PaymentModal';

const tiers = [
  {
    tier: 'personal',
    name: 'Personal',
    price: '$249',
    subtitle: '1-User Seat License',
    features: [
      'Support for more than a dozen public models, plus private models',
      'Platform-layer learning',
      'Seamless model switching with persistent intelligence',
      'Cost control via dynamic routing',
      'Token-spend optimization',
      'Accelerated agent deployment',
      'Rapidly create, test, deploy agentic AI',
      'Reusable agent workflows',
      'Multi-model agent validation',
    ],
    ctaLabel: 'Subscribe',
    isPopular: false,
  },
  {
    tier: 'business',
    name: 'Business',
    price: '$799',
    subtitle: '5-User Seat License',
    features: [
      'Everything in Personal, plus:',
      'Visibility into AI usage and costs',
      'Per-user model usage and token consumption reporting',
      'Unified model access, agents, and prompt assets',
    ],
    ctaLabel: 'Subscribe',
    isPopular: true,
    highlightTop: 1,
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    price: 'Call for Pricing',
    subtitle: 'Enterprise License',
    features: [
      'Everything in Business, plus:',
      'Integrated enterprise workflows',
      'Single workspace eliminates duplicate subscriptions',
      'Institutional knowledge and context, regardless of model used',
    ],
    ctaLabel: 'Contact Us',
    isPopular: false,
    highlightTop: 1,
  },
];

/**
 * PricingTable renders the three-tier pricing grid for WorkBench.
 * Handles modal state for Enterprise contact and Stripe checkout.
 */
export default function PricingTable({ inline = false }) {
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [redirectSuccess, setRedirectSuccess] = useState(false);

  // Detect post-redirect success from Stripe (3D Secure or redirect-based payment)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('success') === 'true' ||
      params.get('payment_intent_client_secret')
    ) {
      setRedirectSuccess(true);
      // Clean URL so the banner doesn't reappear on refresh
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleCtaClick = (tier) => {
    if (tier.tier === 'enterprise') {
      setEnterpriseOpen(true);
    } else {
      setSelectedTier(tier);
      setPaymentOpen(true);
    }
  };

  return (
    <>
      <section
        id="pricing"
        className={`relative px-4 md:px-6 py-12 md:py-16 flex flex-col items-center overflow-hidden ${
          inline ? 'regular-banner-white' : 'regular-banner-sand'
        }`}
      >
        {/* Subtle background gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 500px at center, rgba(86, 124, 141, 0.08) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#1F4E79' }}
            >
              {inline ? 'Simple, Transparent Pricing' : 'WorkBench Pricing'}
            </h2>
            <p
              className="subheader mx-auto max-w-3xl"
              style={{ color: '#4B4B4B' }}
            >
              {inline
                ? 'Choose the plan that fits your team. Scale up as you grow.'
                : 'The comprehensive AI platform that empowers your team. Platform-layer intelligence with model and token visibility that enables you to test fast, switch simply, and control costs.'}
            </p>
          </div>

          {/* Post-redirect success banner */}
          {redirectSuccess && (
            <div
              className="mb-8 mx-auto max-w-2xl rounded-xl px-6 py-4 flex items-center gap-3"
              style={{ backgroundColor: '#E2ECF4' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12L10 17L19 8"
                  stroke="#1F4E79"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-geist)',
                  color: '#1F4E79',
                  fontWeight: 500,
                }}
              >
                Payment successful! Thank you for subscribing. Check your email for
                setup instructions.
              </p>
              <button
                onClick={() => setRedirectSuccess(false)}
                className="ml-auto flex-shrink-0"
                aria-label="Dismiss"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 1L15 15M15 1L1 15"
                    stroke="#1F4E79"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {tiers.map((tier) => (
              <PricingCard
                key={tier.tier}
                {...tier}
                onCtaClick={() => handleCtaClick(tier)}
              />
            ))}
          </div>

          {/* Token usage footer note */}
          <p
            className="text-center mt-8 text-sm"
            style={{
              fontFamily: 'var(--font-geist)',
              color: '#567C8D',
              fontWeight: 300,
            }}
          >
            * Plus token usage. All plans include platform access and core features.
          </p>
        </div>
      </section>

      {/* Modals — conditionally rendered so they only mount when needed */}
      {enterpriseOpen && (
        <EnterpriseModal isOpen={enterpriseOpen} onClose={() => setEnterpriseOpen(false)} />
      )}
      {paymentOpen && selectedTier && (
        <PaymentModal
          isOpen={paymentOpen}
          onClose={() => {
            setPaymentOpen(false);
            setSelectedTier(null);
          }}
          tier={selectedTier}
        />
      )}
    </>
  );
}
