import Button from "../common/Button";

const CTASection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {/* Candidate Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-5 d-flex flex-column">
                <div
                  className="bg-primary text-white rounded-4 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <i
                    className="bi bi-briefcase-fill"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Find Your Next Role</h3>

                <p className="text-muted mb-4">
                  Discover thousands of opportunities from top companies. Build
                  your profile, apply effortlessly, and accelerate your career
                  with AI-powered job matching.
                </p>

                <div className="mt-auto">
                  <Button icon="bi-arrow-right">Find Jobs</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recruiter Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-5 d-flex flex-column">
                <div
                  className="bg-dark text-white rounded-4 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Hire Top Talent</h3>

                <p className="text-muted mb-4">
                  Post jobs, discover qualified candidates, manage hiring
                  pipelines, and streamline recruitment with AI-powered
                  recommendations.
                </p>

                <div className="mt-auto">
                  <Button variant="outline-primary" icon="bi-arrow-right">
                    Hire Talent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
