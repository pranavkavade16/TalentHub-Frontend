import Button from "../common/Button";

const LandingJobCard = ({ job }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body p-4 d-flex flex-column">
        {/* Featured Badge */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <h5 className="fw-bold mb-1">{job.title}</h5>

            <p className="text-muted mb-0">{job.company}</p>
          </div>

          {job.featured && (
            <span className="badge bg-primary-subtle text-primary">
              Featured
            </span>
          )}
        </div>

        {/* Details */}

        <div className="small text-muted mb-4">
          <div className="mb-2">
            <i className="bi bi-cash-stack me-2"></i>
            {job.salary}
          </div>

          <div className="mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            {job.location}
          </div>

          <div className="mb-2">
            <i className="bi bi-building me-2"></i>
            {job.workplace}
          </div>

          <div>
            <i className="bi bi-briefcase me-2"></i>
            {job.type}
          </div>
        </div>

        {/* Footer */}

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <button className="btn btn-light rounded-circle">
            <i className="bi bi-bookmark"></i>
          </button>

          <Button icon="bi-send">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingJobCard;
