const LandingJobCard = ({ job }) => {
  return (
    <div className="landing-job-card h-100">
      {job.featured && <span className="featured-badge">Featured</span>}

      {/* Company */}

      <div className="d-flex mb-4">
        <div className={`company-logo ${job.logoBg}`}>
          <i className={`bi ${job.logo}`}></i>
        </div>

        <div className="ms-3">
          <h5 className="fw-bold mb-1">{job.title}</h5>

          <p className="text-muted mb-0">{job.company}</p>
        </div>
      </div>

      {/* Pills */}

      <div className="d-flex flex-wrap gap-2 mb-4">
        <span className="job-pill">
          <i className="bi bi-cash-stack me-2"></i>

          {job.salary}
        </span>

        <span className="job-pill">
          <i className="bi bi-clock me-2"></i>

          {job.type}
        </span>
      </div>

      {/* Footer */}

      <div className="d-flex justify-content-between align-items-center border-top pt-4">
        <div className="text-muted small">
          <i className="bi bi-geo-alt me-2"></i>

          {job.location}
        </div>

        <button className="apply-link">
          Apply Now
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default LandingJobCard;
