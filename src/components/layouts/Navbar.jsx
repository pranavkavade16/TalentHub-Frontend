import { NavLink } from "react-router-dom";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      style={{ minHeight: "72px", zIndex: 1030 }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}

        <div className="d-flex align-items-center">
          <button
            className="btn btn-light rounded-3 border d-lg-none me-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
          >
            <i className="bi bi-list fs-5"></i>
          </button>

          <Logo />
        </div>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          {/* Search */}

          <div
            className="flex-grow-1 mx-lg-5 my-3 my-lg-0"
            style={{ maxWidth: "650px" }}
          >
            <SearchBar placeholder="Search jobs, candidates..." />
          </div>

          <div className="d-flex align-items-center gap-2">
            {/* Notifications */}

            <button className="btn btn-light border rounded-circle position-relative">
              <i className="bi bi-bell"></i>

              <span
                className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle"
                style={{
                  width: "8px",
                  height: "8px",
                }}
              ></span>
            </button>

            {/* Settings */}

            <button className="btn btn-light border rounded-circle">
              <i className="bi bi-gear"></i>
            </button>

            {/* Profile */}

            <div className="dropdown">
              <button
                className="btn btn-light border rounded-3 d-flex align-items-center gap-2 px-2"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  width="40"
                  height="40"
                  className="rounded-circle border"
                />

                <div className="text-start d-none d-xl-block">
                  <div className="fw-semibold small">Pranav Kavade</div>

                  <small className="text-muted">Recruiter</small>
                </div>

                <i className="bi bi-chevron-down small text-muted"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm rounded-3 mt-3">
                <li>
                  <NavLink to="/recruiter/profile" className="dropdown-item">
                    <i className="bi bi-person me-2"></i>
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/settings" className="dropdown-item">
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
