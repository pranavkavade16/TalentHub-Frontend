const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "Pune, India",
    type: "Hybrid",
    salary: "₹18L - ₹24L",
    posted: "2 days ago",
    status: "Hiring",
  },
  {
    id: 2,
    title: "React Developer",
    location: "Remote",
    type: "Full Time",
    salary: "₹12L - ₹18L",
    posted: "5 days ago",
    status: "Open",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Bangalore",
    type: "On Site",
    salary: "₹10L - ₹15L",
    posted: "1 week ago",
    status: "Closing Soon",
  },
];

const ActiveJobs = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-bold mb-1">Active Job Openings</h5>

            <small className="text-muted">
              Current positions you're hiring for
            </small>
          </div>

          <button className="btn btn-outline-primary btn-sm">View All</button>
        </div>

        <div className="d-flex flex-column gap-3">
          {jobs.map((job) => (
            <div key={job.id} className="border rounded-4 p-3 bg-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="fw-semibold mb-1">{job.title}</h6>

                  <div className="d-flex flex-wrap gap-3 text-muted small">
                    <span>
                      <i className="bi bi-geo-alt me-1"></i>

                      {job.location}
                    </span>

                    <span>
                      <i className="bi bi-briefcase me-1"></i>

                      {job.type}
                    </span>

                    <span>
                      <i className="bi bi-cash-stack me-1"></i>

                      {job.salary}
                    </span>
                  </div>
                </div>

                <span
                  className={`badge ${
                    job.status === "Hiring"
                      ? "bg-success-subtle text-success"
                      : job.status === "Open"
                        ? "bg-primary-subtle text-primary"
                        : "bg-warning-subtle text-warning"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Posted {job.posted}</small>

                <button className="btn btn-sm btn-light border">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveJobs;
