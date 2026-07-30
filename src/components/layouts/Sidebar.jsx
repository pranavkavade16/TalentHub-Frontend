import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: "bi-grid",
    path: "/recruiter/dashboard",
  },
  {
    title: "Jobs",
    icon: "bi-briefcase",
    path: "/recruiter/jobs",
  },
  {
    title: "Applications",
    icon: "bi-file-earmark-text",
    path: "/recruiter/applications",
  },
  {
    title: "Messages",
    icon: "bi-chat-left-text",
    path: "/recruiter/messages",
  },
  {
    title: "Profile",
    icon: "bi-person",
    path: "/recruiter/profile",
  },
];

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}

      <aside
        className="d-none d-lg-flex flex-column bg-white border-end"
        style={{
          width: "230px",
          minHeight: "calc(100vh - 72px)",
          position: "sticky",
          top: "72px",
          flexShrink: 0,
        }}
      >
        <div className="p-3">
          <ul className="nav nav-pills flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 fw-medium sidebar-link ${
                      isActive ? "active shadow-sm" : "text-dark"
                    }`
                  }
                >
                  <i className={`bi ${item.icon}`}></i>

                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}

        <div className="mt-auto p-3">
          <button className="btn btn-primary rounded-3 fw-semibold w-100 py-2 mb-3">
            <i className="bi bi-plus-lg me-2"></i>
            Post Job
          </button>

          <hr className="my-3" />

          <NavLink
            to="/settings"
            className="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-dark sidebar-link"
          >
            <i className="bi bi-gear"></i>
            Settings
          </NavLink>

          <button className="btn nav-link text-danger d-flex align-items-center gap-3 px-3 py-2 rounded-3 sidebar-link w-100 text-start">
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}

      <div className="offcanvas offcanvas-start" id="sidebar" tabIndex="-1">
        <div className="offcanvas-header border-bottom">
          <h5 className="fw-bold mb-0">Menu</h5>

          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <ul className="nav nav-pills flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 fw-medium sidebar-link ${
                      isActive ? "active shadow-sm" : "text-dark"
                    }`
                  }
                >
                  <i className={`bi ${item.icon}`}></i>

                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary rounded-3 fw-semibold mt-auto">
            <i className="bi bi-plus-lg me-2"></i>
            Post Job
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
