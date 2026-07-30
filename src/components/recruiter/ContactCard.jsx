const ContactCard = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4">Contact Information</h5>

        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-envelope-fill text-primary"></i>
          </div>

          <div>
            <small className="text-muted d-block">Email</small>
            <span className="fw-medium">alex@bytecraft.io</span>
          </div>
        </div>

        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-success-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-telephone-fill text-success"></i>
          </div>

          <div>
            <small className="text-muted d-block">Phone</small>
            <span className="fw-medium">+1 (415) 555-0198</span>
          </div>
        </div>

        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-info-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-linkedin text-info"></i>
          </div>

          <div>
            <small className="text-muted d-block">LinkedIn</small>

            <a href="#" className="text-decoration-none fw-medium">
              linkedin.com/in/alexthompson
            </a>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div
            className="bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-globe text-warning"></i>
          </div>

          <div>
            <small className="text-muted d-block">Website</small>

            <a href="#" className="text-decoration-none fw-medium">
              www.bytecraft.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
