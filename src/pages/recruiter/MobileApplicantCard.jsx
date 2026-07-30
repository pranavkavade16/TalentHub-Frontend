const MobileApplicantCard = ({ applicant }) => {
  const badgeColor = {
    New: "primary",
    Shortlisted: "success",
    Rejected: "danger",
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img
            src={applicant.image}
            alt={applicant.name}
            className="rounded-circle me-3"
            width="55"
            height="55"
          />

          <div className="flex-grow-1">
            <h6 className="fw-bold mb-1">{applicant.name}</h6>

            <small className="text-muted d-block">{applicant.job}</small>

            <small className="text-muted">{applicant.experience}</small>
          </div>

          <button className="btn btn-sm btn-light">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>

        <hr />

        <div className="d-flex justify-content-between">
          <small className="text-muted">Applied</small>

          <small>{applicant.date}</small>
        </div>

        <div className="mt-3">
          <span
            className={`badge bg-${badgeColor[applicant.status]}-subtle text-${badgeColor[applicant.status]}`}
          >
            {applicant.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileApplicantCard;
