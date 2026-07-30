import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      style={{ height: "72px" }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}

        <div className="d-flex align-items-center gap-3">
          <div
            className="bg-primary rounded-3 d-flex justify-content-center align-items-center text-white fw-bold"
            style={{
              width: 42,
              height: 42,
            }}
          >
            TH
          </div>
          <NavLink to="/">
            <span className="fw-bold fs-4">
              Talent<span className="text-primary">Hub</span>
            </span>
          </NavLink>
        </div>
        {/* Mobile */}

        <button
          className="navbar-toggler border-0 shadow-none"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          {/* Search */}

          <div className="flex-grow-1 mx-lg-5 my-3 my-lg-0">
            <div className="position-relative">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>

              <input
                type="search"
                className="form-control rounded-pill border-0 bg-light ps-5 py-2"
                placeholder="Search jobs, candidates..."
              />
            </div>
          </div>

          {/* Right */}

          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button
                className="btn d-flex align-items-center gap-2 border-0"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://i.pravatar.cc/100"
                  className="rounded-circle"
                  width="42"
                  height="42"
                  alt=""
                />

                <div className="text-start d-none d-lg-block">
                  <div className="fw-semibold small">Pranav Kavade</div>

                  <small className="text-secondary">Recruiter</small>
                </div>

                <i className="bi bi-chevron-down small"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-4 mt-3">
                <li>
                  <NavLink className="dropdown-item" to="/recruiter/profile">
                    <i className="bi bi-person me-2"></i>
                    Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/settings">
                    <i className="bi bi-gear me-2"></i>
                    Settings
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button className="dropdown-item text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
