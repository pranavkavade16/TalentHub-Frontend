import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RecruiterLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-lg-10 col-md-9 col-12 bg-light p-4 min-vh-100">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RecruiterLayout;
