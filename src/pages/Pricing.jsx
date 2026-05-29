import PricingTable from '../components/pricing/PricingTable';
import FAQ from '../components/solutions/workbench/FAQ';

/**
 * Standalone Pricing page for WorkBench.
 * Reuses the PricingTable and FAQ sections from the WorkBench page.
 */
function Pricing() {
  return (
    <main className="flex flex-col">
      <section className="relative regular-banner-blue flex items-center justify-center px-4 md:px-6 lg:px-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 250px at center, rgba(251, 250, 248, 1) 0%, rgba(251, 250, 248, 0.9) 75%, rgba(251, 250, 248, 0.5) 85%, transparent 95%)',
            zIndex: 0,
          }}
        />
        <div className="text-center relative z-10 pt-16 pb-8 md:pt-24 md:pb-12">
          <h1
            className="hero-title text-4xl md:text-6xl lg:text-7xl"
            style={{ color: '#1F4E79' }}
          >
            WorkBench Pricing
          </h1>
          <p
            className="subheader mx-auto max-w-3xl mt-4"
            style={{ color: '#4B4B4B' }}
          >
            The comprehensive AI platform that empowers your team with
            model and token visibility, enabling you to test fast, switch simply, and control costs.
          </p>
        </div>
      </section>
      <PricingTable />
      <FAQ />
    </main>
  );
}

export default Pricing;
