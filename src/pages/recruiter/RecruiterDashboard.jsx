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
            <DashboardHeader
              title="Recruiter Dashboard"
              subtitle="Manage your jobs and hiring pipeline"
              buttonText="Post New Job"
              buttonIcon="bi-plus-lg"
            />

            <div className="row g-4 my-4">
              <div className="col-xl-3 col-md-6">
                <StatsCard
                  title="Active Jobs"
                  value="12"
                  growth="2 this week"
                  icon="bi-briefcase"
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <StatsCard
                  title="Applications"
                  value="245"
                  growth="18 this week"
                  icon="bi-file-earmark-text"
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <StatsCard
                  title="Shortlisted"
                  value="32"
                  growth="6 this week"
                  icon="bi-person-check"
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <StatsCard
                  title="Archived Jobs"
                  value="8"
                  growth="1 this week"
                  icon="bi-archive"
                />
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
