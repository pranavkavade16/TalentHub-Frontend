const jobs = [
  {
    title: "Frontend Developer",
    company: "ByteCraft",
    location: "Remote",
    salary: "₹12L - ₹18L",
  },
  {
    title: "React Developer",
    company: "TechNova",
    location: "Pune",
    salary: "₹10L - ₹15L",
  },
  {
    title: "UI Engineer",
    company: "InnovateX",
    location: "Bangalore",
    salary: "₹14L - ₹20L",
  },
];

const RecommendedJobs = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mt-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Recommended Jobs</h5>

          <button className="btn btn-link text-decoration-none">
            View All
          </button>
        </div>

        <div className="row g-3">
          {jobs.map((job) => (
            <div key={job.title} className="col-lg-4">
              <div className="border rounded-4 p-3 h-100">
                <h6 className="fw-bold">{job.title}</h6>

                <p className="text-muted mb-3">{job.company}</p>

                <div className="small text-muted mb-3">
                  <div>
                    <i className="bi bi-geo-alt me-2"></i>
                    {job.location}
                  </div>

                  <div>
                    <i className="bi bi-cash-stack me-2"></i>
                    {job.salary}
                  </div>
                </div>

                <button className="btn btn-primary btn-sm w-100">
                  View Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedJobs;
