import { useState } from 'react';

/**
 * Checkmark icon used for feature lists in pricing cards.
 */
export function CheckIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="#C8D9E6" />
      <path
        d="M6 10L9 13L14 7"
        stroke="#1F4E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A reusable list of features rendered with checkmark icons.
 */
export function FeatureList({ features, highlightTop = 0 }) {
  return (
    <ul className="space-y-3 text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0">
            <CheckIcon />
          </span>
          <span
            className="text-sm leading-relaxed"
            style={{
              fontFamily: 'var(--font-geist)',
              color: '#4B4B4B',
              fontWeight: index < highlightTop ? 500 : 300,
            }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * A single pricing tier card.
 */
export default function PricingCard({
  name,
  price,
  subtitle,
  features,
  ctaLabel,
  isPopular = false,
  onCtaClick,
  highlightTop = 0,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-2xl border transition-all duration-300"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: isPopular ? '#1F4E79' : '#E5E5E5',
        borderWidth: isPopular ? '2px' : '1px',
        boxShadow: isPopular
          ? '0 8px 30px rgba(31, 78, 121, 0.12)'
          : hovered
          ? '0 4px 20px rgba(0,0,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: isPopular ? 'scale(1.02)' : hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Most Popular badge */}
      {isPopular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: '#1F4E79',
            color: '#FFFFFF',
            fontFamily: 'var(--font-sora)',
          }}
        >
          Most Popular
        </div>
      )}

      <div className="flex flex-col h-full p-6 md:p-8">
        {/* Tier name */}
        <h3
          className="text-2xl mb-2"
          style={{
            fontFamily: 'var(--font-sora)',
            fontWeight: 500,
            color: '#1F4E79',
          }}
        >
          {name}
        </h3>

        {/* Subtitle */}
        <p
          className="text-sm mb-4"
          style={{
            fontFamily: 'var(--font-geist)',
            color: '#4B4B4B',
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>

        {/* Price */}
        <div className="mb-1">
          <span
            className="text-4xl md:text-5xl font-semibold"
            style={{
              fontFamily: 'var(--font-geist)',
              color: '#1F4E79',
            }}
          >
            {price}
          </span>
          {price !== 'Call for Pricing' && (
            <span
              className="text-lg ml-1"
              style={{
                fontFamily: 'var(--font-geist)',
                color: '#4B4B4B',
              }}
            >
              /month
            </span>
          )}
        </div>

        {/* Token disclaimer */}
        {price !== 'Call for Pricing' && (
          <p
            className="text-xs mb-6"
            style={{
              fontFamily: 'var(--font-geist)',
              color: '#567C8D',
              fontWeight: 300,
            }}
          >
            * Plus token usage
          </p>
        )}
        {price === 'Call for Pricing' && <div className="mb-6" />}

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6" />

        {/* Features */}
        <div className="flex-grow">
          <FeatureList features={features} highlightTop={highlightTop} />
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          {price === 'Call for Pricing' ? (
            <button
              onClick={onCtaClick}
              className="w-full py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 border"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#1F4E79',
                borderColor: '#1F4E79',
                fontFamily: 'var(--font-geist)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 217, 230, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              {ctaLabel}
            </button>
          ) : (
            <button
              onClick={onCtaClick}
              className="w-full py-3 px-4 rounded-xl text-base font-medium transition-all duration-200"
              style={{
                backgroundColor: isPopular ? '#1F4E79' : '#567C8D',
                color: '#FFFFFF',
                fontFamily: 'var(--font-geist)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F4E79';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isPopular ? '#1F4E79' : '#567C8D';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
