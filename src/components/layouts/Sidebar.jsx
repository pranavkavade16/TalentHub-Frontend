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
    icon: "bi-envelope",
    path: "/recruiter/messages",
  },
  {
    title: "Profile",
    icon: "bi-person",
    path: "/recruiter/profile",
  },
];

const SidebarLinks = () =>
  menuItems.map((item) => (
    <li key={item.path} className="nav-item">
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `nav-link sidebar-link d-flex align-items-center gap-3 px-3 py-2 fw-medium ${
            isActive ? "active shadow-sm" : "text-dark"
          }`
        }
      >
        <i className={`bi ${item.icon}`}></i>
        <span>{item.title}</span>
      </NavLink>
    </li>
  ));

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}

      <aside
        className="d-none d-lg-flex flex-column bg-white border-end px-3 py-4"
        style={{
          width: "240px",
          height: "calc(100vh - 72px)",
          position: "sticky",
          top: "72px",
        }}
      >
        <ul className="nav nav-pills flex-column gap-2">
          <SidebarLinks />
        </ul>

        <div className="mt-auto">
          <button className="btn btn-primary w-100 rounded-3 py-2 fw-semibold mb-3">
            <i className="bi bi-plus-lg me-2"></i>
            Post New Job
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}

      <div className="offcanvas offcanvas-start" id="sidebar">
        <div className="offcanvas-header border-bottom">
          <h5 className="fw-bold mb-0">Menu</h5>

          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <ul className="nav nav-pills flex-column gap-2">
            <SidebarLinks />
          </ul>

          <div className="mt-auto">
            <button className="btn btn-primary w-100 rounded-3 py-2 fw-semibold mb-3">
              <i className="bi bi-plus-lg me-2"></i>
              Post New Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
