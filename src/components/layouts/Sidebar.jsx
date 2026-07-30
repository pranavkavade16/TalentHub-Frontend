import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: "bi-grid",
    path: "/recruiter/dashboard",
  },
  {
    name: "Jobs",
    icon: "bi-briefcase",
    path: "/recruiter/jobs",
  },
  {
    name: "Applications",
    icon: "bi-file-earmark-text",
    path: "/recruiter/applications",
  },
  {
    name: "Messages",
    icon: "bi-envelope",
    path: "/recruiter/messages",
  },
  {
    name: "Profile",
    icon: "bi-person",
    path: "/recruiter/profile",
  },
];

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="col-lg-2 d-none d-lg-flex flex-column bg-white border-end vh-100 p-3"
        style={{ position: "sticky", top: "72px" }}
      >
        <ul className="nav nav-pills flex-column gap-2">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : "text-dark"
                  }`
                }
              >
                <i className={`bi ${item.icon}`}></i>

                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary mt-auto">
          <i className="bi bi-plus-lg me-2"></i>
          Post New Job
        </button>

        <hr />

        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link text-dark">
              <i className="bi bi-gear me-2"></i>
              Settings
            </NavLink>
          </li>

          <li className="nav-item">
            <button className="btn text-start nav-link text-danger">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar">
        <div className="offcanvas-header">
          <h5 className="fw-bold text-primary">TalentHub</h5>

          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav nav-pills flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center gap-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <i className={`bi ${item.icon}`}></i>

                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary w-100 mt-4">
            <i className="bi bi-plus-lg me-2"></i>
            Post New Job
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
