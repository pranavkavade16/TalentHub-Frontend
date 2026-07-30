const JobHeader = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <div className="d-flex">
          <div
            className="bg-dark rounded-4 text-white fw-bold d-flex align-items-center justify-content-center me-4"
            style={{
              width: 72,
              height: 72,
              fontSize: "1.8rem",
            }}
          >
            A
          </div>

          <div className="flex-grow-1">
            <h2 className="fw-bold mb-2">Frontend Developer</h2>

            <p className="text-muted mb-4">Acme Inc.</p>

            <div className="d-flex flex-wrap gap-4 text-muted">
              <span>
                <i className="bi bi-cash-stack me-2"></i>
                ₹8-15 LPA
              </span>

              <span>
                <i className="bi bi-briefcase me-2"></i>
                2-4 Years
              </span>

              <span>
                <i className="bi bi-geo-alt me-2"></i>
                Bangalore
              </span>

              <span>
                <i className="bi bi-building me-2"></i>
                Remote
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-wrap gap-3">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            Full Time
          </span>

          <small className="text-muted">Posted 2 days ago</small>

          <small className="text-muted">45 Applicants</small>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
