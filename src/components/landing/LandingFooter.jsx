import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <footer className="landing-footer">
      <div className="container">
        {/* Top */}

        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <div className="footer-logo">
                <i className="bi bi-briefcase-fill"></i>
              </div>

              <h3 className="fw-bold ms-3 mb-0">TalentHub</h3>
            </div>

            <p className="footer-text">
              AI-powered hiring platform connecting talented professionals with
              world-class companies.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="/" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Job Seekers */}

          <div className="col-6 col-lg-2">
            <h5 className="footer-heading">Job Seekers</h5>

            <ul className="footer-links">
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>

              <li>
                <Link to="/bookmarks">Saved Jobs</Link>
              </li>

              <li>
                <Link to="/applications">Applications</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Recruiters */}

          <div className="col-6 col-lg-2">
            <h5 className="footer-heading">Recruiters</h5>

            <ul className="footer-links">
              <li>
                <Link to="/">Post Jobs</Link>
              </li>

              <li>
                <Link to="/">Find Candidates</Link>
              </li>

              <li>
                <Link to="/">Dashboard</Link>
              </li>

              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div className="col-lg-4">
            <h5 className="footer-heading">Stay Updated</h5>

            <p className="footer-text">
              Get notified about the latest jobs, hiring trends and career
              insights.
            </p>

            <div className="input-group mt-4">
              <input className="form-control" placeholder="Enter your email" />

              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small>© 2026 TalentHub. All rights reserved.</small>

          <div className="d-flex gap-4 mt-3 mt-md-0">
            <Link to="/">Privacy Policy</Link>

            <Link to="/">Terms</Link>

            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
