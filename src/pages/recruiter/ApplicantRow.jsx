const ApplicantRow = ({ applicant }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return "primary";

      case "Shortlisted":
        return "success";

      case "Rejected":
        return "danger";

      default:
        return "secondary";
    }
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={applicant.image}
            alt={applicant.name}
            width="45"
            height="45"
            className="rounded-circle me-3"
          />

          <div>
            <h6 className="mb-0">{applicant.name}</h6>

            <small className="text-muted">{applicant.email}</small>
          </div>
        </div>
      </td>

      <td>{applicant.job}</td>

      <td>{applicant.date}</td>

      <td>{applicant.experience}</td>

      <td>
        <span
          className={`badge bg-${getStatusBadge(
            applicant.status,
          )}-subtle text-${getStatusBadge(applicant.status)}`}
        >
          {applicant.status}
        </span>
      </td>

      <td>
        <button className="btn btn-light btn-sm">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </td>
    </tr>
  );
};

export default ApplicantRow;
