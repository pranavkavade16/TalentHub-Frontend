import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatusCard";
import RecentApplications from "./RecentApplications";

const dashboardStats = [
  {
    title: "Active Jobs",
    value: "12",
    growth: "2 this week",
    icon: "bi-briefcase",
  },
  {
    title: "Applications",
    value: "245",
    growth: "18 this week",
    icon: "bi-file-earmark-text",
  },
  {
    title: "Shortlisted",
    value: "32",
    growth: "6 this week",
    icon: "bi-person-check",
  },
  {
    title: "Archived Jobs",
    value: "8",
    growth: "1 this week",
    icon: "bi-archive",
  },
];

function RecruiterDashboard() {
  return (
    <>
      <DashboardHeader
        title="Recruiter Dashboard"
        subtitle="Manage your jobs and hiring pipeline."
        buttonText="Post New Job"
        buttonIcon="bi-plus-lg"
      />

      <div className="row g-3 mt-3 mb-4">
        {dashboardStats.map((stat) => (
          <div key={stat.title} className="col-12 col-sm-6 col-xl-3">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      <RecentApplications />
    </>
  );
}

export default RecruiterDashboard;
