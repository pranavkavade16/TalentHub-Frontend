import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top px-3">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary fs-2">
          TalentHub
        </NavLink>

        <div className="d-flex align-items-center">
          <button
            className="btn btn-light d-lg-none me-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <NavLink className="navbar-brand fw-bold text-primary fs-2" to="/">
            TalentHub
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          {/* Search */}
          <form className="mx-lg-4 my-3 my-lg-0 flex-grow-1">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                className="form-control"
                placeholder="Search jobs, candidates..."
              />
            </div>
          </form>

          {/* Menu */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/salaries">
                Salaries
              </NavLink>
            </li>
          </ul>

          {/* Right Icons */}

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light position-relative">
              <i className="bi bi-bell fs-5"></i>

              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle"></span>
            </button>

            <button className="btn btn-light">
              <i className="bi bi-gear fs-5"></i>
            </button>

            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="rounded-circle"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
