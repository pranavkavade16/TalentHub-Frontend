import SearchBar from "./SearchBar";

const popularSearches = [
  "Frontend Developer",
  "Product Designer",
  "Node.js",
  "Data Science",
];

const HeroSection = () => {
  return (
    <section className="py-5 position-relative overflow-hidden bg-light">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-4">
              AI Powered Hiring Platform
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2.5rem,6vw,4.5rem)",
                lineHeight: 1.2,
              }}
            >
              Find your <span className="text-primary">dream job</span>
              <br />
              and build your future.
            </h1>

            <p
              className="text-muted mx-auto mb-5"
              style={{
                maxWidth: "700px",
                fontSize: "1.1rem",
              }}
            >
              Discover thousands of opportunities from top companies, connect
              with recruiters, and accelerate your career with AI-powered
              hiring.
            </p>

            <SearchBar />

            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mt-4">
              <span className="text-muted fw-semibold">Popular:</span>

              {popularSearches.map((item) => (
                <button
                  key={item}
                  className="btn btn-light border rounded-pill px-3"
                >
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
