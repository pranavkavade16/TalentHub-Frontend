const ApplicantRow = ({ applicant }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "New":
        return "bg-primary-subtle text-primary";

      case "Shortlisted":
        return "bg-success-subtle text-success";

      case "Rejected":
        return "bg-danger-subtle text-danger";

      default:
        return "bg-secondary-subtle text-secondary";
    }
  };

  return (
    <tr>
      {/* Applicant */}

      <td className="py-3 px-4">
        <div className="d-flex align-items-center">
          <img
            src={applicant.image}
            alt={applicant.name}
            width="48"
            height="48"
            className="rounded-circle border me-3 object-fit-cover"
          />

          <div>
            <h6 className="mb-1 fw-semibold">{applicant.name}</h6>

            <small className="text-muted">{applicant.email}</small>
          </div>
        </div>
      </td>

      {/* Job */}

      <td className="py-3">{applicant.job}</td>

      {/* Date */}

      <td className="py-3 text-muted">{applicant.date}</td>

      {/* Experience */}

      <td className="py-3">{applicant.experience}</td>

      {/* Status */}

      <td className="py-3">
        <span
          className={`badge rounded-pill px-3 py-2 fw-medium ${getStatusClasses(
            applicant.status,
          )}`}
        >
          {applicant.status}
        </span>
      </td>

      {/* Action */}

      <td className="py-3 text-end pe-4">
        <button className="btn btn-light btn-sm rounded-circle border">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </td>
    </tr>
  );
};

export default ApplicantRow;
