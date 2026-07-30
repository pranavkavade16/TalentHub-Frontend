import StatusBadge from "../common/StatusBadge";

const ApplicantRow = ({ applicant }) => {
  return (
    <tr>
      <td className="py-3">
        <div className="d-flex align-items-center">
          <img
            src={applicant.image}
            alt={applicant.name}
            width="46"
            height="46"
            className="rounded-circle me-3"
          />

          <div>
            <h6 className="mb-0 fw-semibold">{applicant.name}</h6>

            <small className="text-muted">{applicant.email}</small>
          </div>
        </div>
      </td>

      <td>{applicant.job}</td>

      <td>{applicant.experience}</td>

      <td>
        <div className="d-flex flex-wrap gap-1">
          {applicant.skills.map((skill) => (
            <span
              key={skill}
              className="badge bg-light text-dark border fw-normal"
            >
              {skill}
            </span>
          ))}
        </div>
      </td>

      <td>{applicant.applied}</td>

      <td>
        <StatusBadge status={applicant.status} />
      </td>

      <td>
        <div className="dropdown">
          <button
            className="btn btn-light btn-sm border rounded-circle"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-three-dots"></i>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">View Profile</button>
            </li>

            <li>
              <button className="dropdown-item">Download Resume</button>
            </li>

            <li>
              <button className="dropdown-item text-success">Shortlist</button>
            </li>

            <li>
              <button className="dropdown-item text-danger">Reject</button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ApplicantRow;
