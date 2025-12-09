import { Link } from 'react-router-dom';
import heroVideo from '../../assets/videos/HeroSectionBackgroundVideo.mp4';

function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center px-4 md:px-6 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Foreground Content */}
      <div className="relative z-10 hero-banner flex max-w-4xl flex-col items-center gap-4 md:gap-6 text-center">
        
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-6 md:mb-12 text-lg md:text-2xl" style={{ color: "#4B4B4B" }}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="button-primary"
          >
            Request a Demo
          </button>

          <button
            onClick={() => {
              const solutionsSection = document.getElementById('solutions-section');
              if (solutionsSection) {
                const elementPosition = solutionsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="button-secondary"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
