const RoleCard = ({ title, description, icon, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`card mb-4 rounded-4 cursor-pointer ${
        active ? "border-primary shadow-sm" : "border-light"
      }`}
      style={{
        cursor: "pointer",
        transition: "0.25s",
      }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div
            className={`rounded-3 d-flex justify-content-center align-items-center me-3 ${
              active ? "bg-primary text-white" : "bg-light"
            }`}
            style={{
              width: 60,
              height: 60,
            }}
          >
            <i className={`bi ${icon} fs-4`}></i>
          </div>

          <div className="flex-grow-1">
            <h5 className="fw-bold mb-1">{title}</h5>

            <small className="text-muted">{description}</small>
          </div>

          <div>
            <i
              className={`bi ${
                active
                  ? "bi-check-circle-fill text-primary"
                  : "bi-circle text-secondary"
              } fs-4`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
