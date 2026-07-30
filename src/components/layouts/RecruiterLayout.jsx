import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

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

      <Footer />
    </>
  );
};

export default RecruiterLayout;
