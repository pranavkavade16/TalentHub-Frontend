import RecentApplicationCard from "./RecentApplicationCard";

const applications = [
  {
    id: 1,
    company: "ByteCraft",
    title: "Frontend Developer",
    applied: "2 days ago",
    status: "Under Review",
  },
  {
    id: 2,
    company: "TechNova",
    title: "React Developer",
    applied: "5 days ago",
    status: "Interview",
  },
  {
    id: 3,
    company: "InnovateX",
    title: "UI Engineer",
    applied: "1 week ago",
    status: "Rejected",
  },
];

const ApplicantRecentApplications = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mt-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-bold mb-1">Recent Applications</h5>

            <p className="text-muted mb-0">
              Track your latest job applications.
            </p>
          </div>

          <button className="btn btn-link text-decoration-none">
            View All
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          {applications.map((application) => (
            <RecentApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantRecentApplications;
