const StatsCard = ({ title, value, growth, icon }) => {
  return (
    <div className="card border-0 shadow-sm rounded-3 h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <small className="text-muted fw-semibold text-uppercase">
              {title}
            </small>

            <h2 className="fw-bold mt-2 mb-0">{value}</h2>
          </div>

          <div
            className="bg-primary bg-opacity-10 rounded-3 d-flex justify-content-center align-items-center"
            style={{
              width: 48,
              height: 48,
            }}
          >
            <i className={`bi ${icon} text-primary fs-5`}></i>
          </div>
        </div>

        <small className="text-success fw-medium">
          <i className="bi bi-arrow-up me-1"></i>

          {growth}
        </small>
      </div>
    </div>
  );
};

export default StatsCard;
