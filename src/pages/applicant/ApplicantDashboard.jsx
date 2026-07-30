import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatusCard";
import RecentApplications from "../../components/dashboard/RecentApplications";
import RecommendedJobs from "../../components/dashboard/RecommendedJobs";
import ApplicationProgress from "../../components/dashboard/ApplicationProgress";

const stats = [
  {
    title: "Applied Jobs",
    value: "12",
    growth: "2 this week",
    icon: "bi-send-check",
  },
  {
    title: "Saved Jobs",
    value: "18",
    growth: "5 new",
    icon: "bi-bookmark",
  },
  {
    title: "Interviews",
    value: "4",
    growth: "1 upcoming",
    icon: "bi-calendar-check",
  },
  {
    title: "Profile Views",
    value: "87",
    growth: "12 this week",
    icon: "bi-eye",
  },
];

const ApplicantDashboard = () => {
  return (
    <>
      <DashboardHeader
        title="Welcome Back 👋"
        subtitle="Track your applications and discover new opportunities."
        buttonText="Browse Jobs"
        buttonIcon="bi-search"
      />

      <div className="row g-3 mt-3 mb-4">
        {stats.map((stat) => (
          <div key={stat.title} className="col-12 col-sm-6 col-xl-3">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      <RecentApplications />

      <RecommendedJobs />

      <ApplicationProgress />
    </>
  );
};

export default ApplicantDashboard;
