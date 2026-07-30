import Button from "../common/Button";

const JobCard = ({ job }) => {
  const badgeColor = {
    Published: "success",
    Draft: "warning",
    Archived: "secondary",
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="fw-bold mb-1">{job.title}</h5>

            <p className="text-muted mb-0">{job.company}</p>
          </div>

          <span
            className={`badge bg-${badgeColor[job.status]}-subtle text-${badgeColor[job.status]} px-3 py-2`}
          >
            {job.status}
          </span>
        </div>

        {/* Details */}
        <div className="row g-3 small text-muted mb-4">
          <div className="col-md-3">
            <i className="bi bi-cash-stack me-2"></i>
            {job.salary}
          </div>

          <div className="col-md-3">
            <i className="bi bi-geo-alt me-2"></i>
            {job.location}
          </div>

          <div className="col-md-3">
            <i className="bi bi-building me-2"></i>
            {job.workplace}
          </div>

          <div className="col-md-3">
            <i className="bi bi-clock me-2"></i>
            {job.posted}
          </div>
        </div>

        {/* Analytics */}
        <div className="d-flex flex-wrap gap-4 mb-4">
          <div>
            <span className="fw-semibold">{job.applicants}</span>

            <small className="text-muted ms-1">Applicants</small>
          </div>

          <div>
            <span className="fw-semibold">{job.views}</span>

            <small className="text-muted ms-1">Views</small>
          </div>
        </div>

        {/* Actions */}
        <div className="d-flex flex-wrap gap-2">
          <Button variant="outline-primary" icon="bi-pencil">
            Edit
          </Button>

          <Button variant="primary" icon="bi-people">
            Applicants
          </Button>

          <Button variant="outline-danger" icon="bi-archive">
            Archive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
