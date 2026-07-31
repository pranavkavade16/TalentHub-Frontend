import { Link } from "react-router-dom";
import Button from "../common/Button";

const LandingNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white sticky-top border-bottom"
      style={{
        backdropFilter: "blur(10px)",
        zIndex: 1050,
      }}
    >
      <div className="container py-2">
        {/* Logo */}

        <Link
          className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center"
          to="/"
        >
          <i className="bi bi-briefcase-fill me-2"></i>
          TalentHub
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#landingNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="landingNavbar">
          <ul className="navbar-nav mx-auto gap-lg-4 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold active" to="/jobs">
                Find Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/companies">
                Companies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Button variant="outline-primary">Login</Button>

            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
