const STATUS = {
  New: "primary",
  Shortlisted: "success",
  Rejected: "danger",
  Applied: "warning",
  Active: "success",
  Closed: "secondary",
};

const StatusBadge = ({ status }) => {
  const color = STATUS[status] || "secondary";

  return (
    <span
      className={`badge rounded-pill bg-${color}-subtle text-${color} px-3 py-2 fw-medium`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
