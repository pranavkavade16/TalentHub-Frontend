const StatsCard = ({ title, value, growth, icon, iconColor = "primary" }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <small className="text-uppercase text-secondary fw-semibold">
              {title}
            </small>

            <h2 className="fw-bold mt-3 mb-0">{value}</h2>
          </div>

          <div
            className={`bg-${iconColor} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            <i className={`bi ${icon} text-${iconColor} fs-5`}></i>
          </div>
        </div>

        <div className="mt-4">
          <span className="badge text-success bg-success-subtle px-3 py-2 rounded-pill">
            <i className="bi bi-arrow-up me-1"></i>

            {growth}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
