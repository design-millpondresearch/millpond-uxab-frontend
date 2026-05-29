import { useEffect, useRef, useState, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Load Stripe with your publishable key (set in environment variable)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PAYMENT_ELEMENT_OPTIONS = {
  layout: 'tabs',
  defaultValues: {
    billingDetails: {
      name: '',
      email: '',
    },
  },
};

/**
 * Inner checkout form rendered inside Stripe Elements.
 */
function CheckoutForm({ onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      onError?.(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onSuccess?.();
    } else if (paymentIntent && paymentIntent.status === 'requires_action') {
      // 3D Secure or additional action required — Stripe handles redirect flow
      // This branch is mainly for safety; redirect: 'if_required' handles most cases.
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement options={PAYMENT_ELEMENT_OPTIONS} />
      {message && (
        <div
          className="text-sm px-4 py-3 rounded-lg"
          style={{
            backgroundColor: '#FDE8E8',
            color: '#C81E1E',
            fontFamily: 'var(--font-geist)',
          }}
        >
          {message}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full py-3 px-4 rounded-xl text-base font-medium transition-all duration-200"
        style={{
          backgroundColor: !stripe || isLoading ? '#A0A0A0' : '#1F4E79',
          color: '#FFFFFF',
          fontFamily: 'var(--font-geist)',
          border: 'none',
          cursor: !stripe || isLoading ? 'not-allowed' : 'pointer',
          opacity: !stripe || isLoading ? 0.7 : 1,
        }}
      >
        {isLoading ? 'Processing…' : 'Pay & Subscribe'}
      </button>
    </form>
  );
}

/**
 * PaymentModal — fetches a Stripe client secret, then renders Elements
 * for in-app checkout of Personal or Business tiers.
 */
export default function PaymentModal({ isOpen, onClose, tier }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [success, setSuccess] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !tier) return;

    setClientSecret(null);
    setFetchError(null);
    setSuccess(false);

    const fetchClientSecret = async () => {
      try {
        const res = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier: tier.tier }),
        });

        if (!res.ok) {
          let message = 'Failed to initialize payment';
          try {
            const data = await res.json();
            if (data.error) message = data.error;
          } catch {
            const text = await res.text();
            if (text) message = text;
          }
          throw new Error(message);
        }

        const data = await res.json();
        if (!data.clientSecret) {
          throw new Error('Invalid response from payment server');
        }
        setClientSecret(data.clientSecret);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    fetchClientSecret();
  }, [isOpen, tier]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!isOpen || !tier) return null;

  const stripeOptions = useMemo(
    () =>
      clientSecret
        ? { clientSecret, appearance: { theme: 'stripe' } }
        : undefined,
    [clientSecret]
  );

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(31, 78, 121, 0.45)', backdropFilter: 'blur(4px)' }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid #E5E5E5' }}
        >
          <div>
            <h3
              className="text-xl"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 500,
                color: '#1F4E79',
              }}
            >
              {success ? 'Payment Successful' : `Subscribe — ${tier.name}`}
            </h3>
            {!success && (
              <p
                className="text-sm mt-1"
                style={{
                  fontFamily: 'var(--font-geist)',
                  color: '#4B4B4B',
                  fontWeight: 300,
                }}
              >
                {tier.price}/month * Plus token usage
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: '#F5F5F0' }}
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="#1F4E79"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {success ? (
            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#E2ECF4' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 16L13 23L26 9"
                    stroke="#1F4E79"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className="text-base"
                style={{
                  fontFamily: 'var(--font-geist)',
                  color: '#4B4B4B',
                }}
              >
                Thank you for subscribing to {tier.name}!
              </p>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-geist)',
                  color: '#567C8D',
                  fontWeight: 300,
                }}
              >
                You will receive a confirmation email shortly with setup instructions.
              </p>
              <button
                onClick={onClose}
                className="button-primary mt-2"
              >
                Close
              </button>
            </div>
          ) : fetchError ? (
            <div className="text-center space-y-4">
              <div
                className="text-sm px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: '#FDE8E8',
                  color: '#C81E1E',
                  fontFamily: 'var(--font-geist)',
                }}
              >
                {fetchError}
              </div>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-geist)',
                  color: '#4B4B4B',
                  fontWeight: 300,
                }}
              >
                Please try again or contact support if the issue persists.
              </p>
            </div>
          ) : !clientSecret ? (
            <div className="flex items-center justify-center py-8">
              <div
                className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: '#1F4E79', borderTopColor: 'transparent' }}
              />
            </div>
          ) : (
            <Elements stripe={stripePromise} options={stripeOptions}>
              <CheckoutForm
                onSuccess={() => setSuccess(true)}
                onError={(msg) => setFetchError(msg)}
              />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}
