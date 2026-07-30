import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RecruiterLayout = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <main
          className="flex-grow-1 bg-light p-4"
          style={{
            minHeight: "calc(100vh - 72px)",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RecruiterLayout;
