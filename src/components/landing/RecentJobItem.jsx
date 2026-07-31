import Button from "../common/Button";

const RecentJobItem = ({ job }) => {
  return (
    <div className="recent-job-item">
      <div className="row align-items-center gy-3">
        {/* Logo + Company */}
        <div className="col-lg-4">
          <div className="d-flex align-items-center">
            <div className="recent-company-logo">{job.logo}</div>

            <div className="ms-3">
              <h5 className="fw-bold mb-1">{job.title}</h5>

              <p className="text-muted mb-0">{job.company}</p>
            </div>
          </div>
        </div>

        {/* Details */}

        <div className="col-lg-5">
          <div className="d-flex flex-wrap gap-3 small text-muted">
            <span>
              <i className="bi bi-geo-alt me-1"></i>
              {job.location}
            </span>

            <span>
              <i className="bi bi-clock me-1"></i>
              {job.type}
            </span>

            <span>
              <i className="bi bi-cash-stack me-1"></i>
              {job.salary}
            </span>
          </div>
        </div>

        {/* Actions */}

        <div className="col-lg-3">
          <div className="d-flex justify-content-lg-end align-items-center gap-3">
            <small className="text-muted">{job.posted}</small>

            <button className="bookmark-btn">
              <i className="bi bi-bookmark"></i>
            </button>

            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobItem;
