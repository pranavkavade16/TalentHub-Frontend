const ExperienceCard = ({ experience }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Experience</h4>

          <button className="btn btn-sm btn-outline-primary rounded-pill">
            <i className="bi bi-plus-lg me-2"></i>
            Add
          </button>
        </div>

        {experience.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== experience.length - 1 ? "border-bottom pb-4 mb-4" : ""
            }`}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex">
                <div
                  className="bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-briefcase text-primary"></i>
                </div>

                <div>
                  <h5 className="fw-semibold mb-1">{item.role}</h5>

                  <p className="text-muted mb-2">{item.company}</p>

                  <div className="small text-muted">
                    <div className="mb-1">
                      <i className="bi bi-calendar3 me-2"></i>
                      {item.duration}
                    </div>

                    <div>
                      <i className="bi bi-geo-alt me-2"></i>
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-light btn-sm rounded-circle">
                <i className="bi bi-pencil"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
