const STATUS_STYLES = {
  New: "bg-primary-subtle text-primary",
  Shortlisted: "bg-success-subtle text-success",
  Rejected: "bg-danger-subtle text-danger",
};

const MobileApplicantCard = ({ applicant }) => {
  return (
    <div className="card border-0 shadow-sm rounded-3 mb-3">
      <div className="card-body p-3">
        {/* Top Section */}

        <div className="d-flex align-items-center">
          <img
            src={applicant.image}
            alt={applicant.name}
            width="50"
            height="50"
            className="rounded-circle border me-3"
          />

          <div className="flex-grow-1">
            <h6 className="fw-semibold mb-1">{applicant.name}</h6>

            <small className="text-muted d-block">{applicant.email}</small>
          </div>

          <button className="btn btn-light btn-sm rounded-circle border">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>

        {/* Details */}

        <div className="mt-3">
          <div className="row g-2 small">
            <div className="col-6">
              <span className="text-muted d-block">Job</span>
              <span className="fw-medium">{applicant.job}</span>
            </div>

            <div className="col-6">
              <span className="text-muted d-block">Experience</span>
              <span>{applicant.experience}</span>
            </div>

            <div className="col-6 mt-3">
              <span className="text-muted d-block">Applied</span>
              <span>{applicant.date}</span>
            </div>

            <div className="col-6 mt-3">
              <span className="text-muted d-block">Status</span>

              <span
                className={`badge rounded-pill px-3 py-2 fw-medium ${
                  STATUS_STYLES[applicant.status] ||
                  "bg-secondary-subtle text-secondary"
                }`}
              >
                {applicant.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApplicantCard;
