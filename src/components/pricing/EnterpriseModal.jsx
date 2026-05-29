import { useEffect, useRef } from 'react';
import { useHubspotForm } from '../../hooks/useHubspotForm';

/**
 * EnterpriseModal — a centered modal overlay with a HubSpot contact form.
 * Reuses the existing useHubspotForm hook for consistency.
 */
export default function EnterpriseModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useHubspotForm({
    portalId: '48049833',
    formId: '541e8dc3-144b-4cbe-9a09-ccd0807f3095',
    targetId: 'hubspot-form-enterprise',
  });

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

  // Close on outside click
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(31, 78, 121, 0.45)', backdropFilter: 'blur(4px)' }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid #E5E5E5' }}
        >
          <h3
            className="text-xl"
            style={{
              fontFamily: 'var(--font-sora)',
              fontWeight: 500,
              color: '#1F4E79',
            }}
          >
            Contact Us — Enterprise
          </h3>
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
          <p
            className="text-sm mb-4"
            style={{
              fontFamily: 'var(--font-geist)',
              color: '#4B4B4B',
              fontWeight: 300,
            }}
          >
            Tell us about your organization and we will tailor an Enterprise plan
            for your needs.
          </p>
          <div
            className="w-full rounded-xl p-4"
            style={{ backgroundColor: '#E2ECF4' }}
          >
            <div id="hubspot-form-enterprise" data-hs-forms-root="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
