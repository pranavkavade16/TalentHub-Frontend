import SearchBar from "./SearchBar";

const popularSearches = [
  "Frontend Developer",
  "Product Designer",
  "Node.js",
  "Data Science",
];

const HeroSection = () => {
  return (
    <section className="landing-hero position-relative overflow-hidden">
      {/* Background Blur Circles */}

      <div className="hero-circle hero-circle-1"></div>

      <div className="hero-circle hero-circle-2"></div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-10">
            <span className="hero-badge mb-4">AI Powered Hiring Platform</span>

            <h1 className="hero-title">
              Find your
              <span className="text-primary"> dream job</span>
              <br />
              and build your future.
            </h1>

            <p className="hero-subtitle">
              Discover thousands of opportunities from top companies, connect
              with recruiters and accelerate your career with AI-powered hiring.
            </p>

            <SearchBar />

            <div className="popular-searches">
              <span className="fw-semibold text-muted">Popular:</span>

              {popularSearches.map((item) => (
                <button key={item} className="popular-chip">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
