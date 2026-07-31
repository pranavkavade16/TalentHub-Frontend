import Button from "../common/Button";

const ApplicationCard = ({ application }) => {
  const badgeColor = {
    Applied: "primary",
    "Under Review": "warning",
    Interview: "success",
    Offer: "info",
    Rejected: "danger",
    Withdrawn: "secondary",
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="fw-bold mb-1">{application.title}</h5>

            <p className="text-muted mb-0">{application.company}</p>
          </div>

          <span
            className={`badge bg-${badgeColor[application.status]}-subtle text-${badgeColor[application.status]} px-3 py-2`}
          >
            {application.status}
          </span>
        </div>

        {/* Details */}
        <div className="row g-3 small text-muted mb-4">
          <div className="col-md-3">
            <i className="bi bi-cash-stack me-2"></i>
            {application.salary}
          </div>

          <div className="col-md-3">
            <i className="bi bi-geo-alt me-2"></i>
            {application.location}
          </div>

          <div className="col-md-3">
            <i className="bi bi-building me-2"></i>
            {application.workplace}
          </div>

          <div className="col-md-3">
            <i className="bi bi-calendar-event me-2"></i>
            Applied {application.applied}
          </div>
        </div>

        {/* Application Info */}
        <div className="d-flex flex-wrap gap-4 mb-4">
          <div>
            <span className="fw-semibold">{application.stage}</span>

            <small className="text-muted ms-1">Current Stage</small>
          </div>

          <div>
            <span className="fw-semibold">{application.updated}</span>

            <small className="text-muted ms-1">Last Updated</small>
          </div>
        </div>

        {/* Actions */}
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" icon="bi-eye">
            View Job
          </Button>

          <Button variant="outline-primary" icon="bi-file-earmark-text">
            View Application
          </Button>

          <Button variant="outline-danger" icon="bi-x-circle">
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
