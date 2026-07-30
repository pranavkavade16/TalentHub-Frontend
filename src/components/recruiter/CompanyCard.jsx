const CompanyCard = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
      {/* Cover */}

      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ height: "90px" }}
      >
        <div
          className="bg-white rounded-4 shadow-sm d-flex justify-content-center align-items-center"
          style={{
            width: "72px",
            height: "72px",
            marginBottom: "-36px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="Company"
            width="42"
          />
        </div>
      </div>

      <div className="card-body text-center pt-5">
        <h5 className="fw-bold mb-2">ByteCraft</h5>

        <p className="text-muted small mb-4" style={{ lineHeight: "1.7" }}>
          Building the next generation of collaborative cloud infrastructure
          tools for enterprise developers worldwide.
        </p>

        <div className="text-start small">
          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-people text-primary me-3"></i>

            <span>500 - 1000 Employees</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-globe text-primary me-3"></i>

            <span>www.bytecraft.io</span>
          </div>

          <div className="d-flex align-items-center">
            <i className="bi bi-building text-primary me-3"></i>

            <span>Software Development</span>
          </div>
        </div>

        <button className="btn btn-outline-primary w-100 mt-4">
          View Company
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
