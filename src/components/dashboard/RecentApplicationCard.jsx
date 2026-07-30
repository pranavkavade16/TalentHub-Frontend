import Button from "../common/Button";

const RecentApplicationCard = ({ application }) => {
  const badge = {
    Applied: "primary",
    "Under Review": "warning",
    Interview: "success",
    Rejected: "danger",
    Offer: "info",
  };

  return (
    <div className="border rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="fw-bold mb-1">{application.title}</h6>

          <p className="text-muted mb-3">{application.company}</p>

          <div className="small text-muted">Applied {application.applied}</div>
        </div>

        <span
          className={`badge bg-${badge[application.status]}-subtle text-${badge[application.status]}`}
        >
          {application.status}
        </span>
      </div>

      <div className="mt-3">
        <Button variant="outline-primary" icon="bi-arrow-right">
          View Job
        </Button>
      </div>
    </div>
  );
};

export default RecentApplicationCard;
