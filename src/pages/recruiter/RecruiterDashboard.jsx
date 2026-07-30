import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentApplications from "../../components/dashboard/RecentApplications";

function RecruiterDashboard() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-lg-10 col-12 p-4 bg-light min-vh-100">
            <DashboardHeader />

            <div className="row g-4 mt-2">
              <div className="col-lg-3 col-md-6">
                <StatsCard />
              </div>

              <div className="col-lg-3 col-md-6">
                <StatsCard />
              </div>

              <div className="col-lg-3 col-md-6">
                <StatsCard />
              </div>

              <div className="col-lg-3 col-md-6">
                <StatsCard />
              </div>
            </div>

            <RecentApplications />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RecruiterDashboard;
