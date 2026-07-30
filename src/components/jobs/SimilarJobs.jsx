const jobs = [
  {
    title: "React Developer",
    company: "TechNova",
    location: "Bangalore",
  },
  {
    title: "Frontend Engineer",
    company: "InnovateX",
    location: "Remote",
  },
  {
    title: "UI Developer",
    company: "ByteCraft",
    location: "Pune",
  },
];

const SimilarJobs = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Similar Jobs</h5>

        {jobs.map((job) => (
          <div key={job.title} className="d-flex align-items-center mb-4">
            <div
              className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-3"
              style={{
                width: 45,
                height: 45,
              }}
            >
              {job.company[0]}
            </div>

            <div>
              <h6 className="mb-1 fw-semibold">{job.title}</h6>

              <small className="text-muted d-block">{job.company}</small>

              <small className="text-muted">{job.location}</small>
            </div>
          </div>
        ))}

        <button className="btn btn-link text-decoration-none w-100">
          View All Similar Jobs
        </button>
      </div>
    </div>
  );
};

export default SimilarJobs;
