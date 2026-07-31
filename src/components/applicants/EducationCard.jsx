const EducationCard = ({ education }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Education</h4>

          <button className="btn btn-sm btn-outline-primary rounded-pill">
            <i className="bi bi-plus-lg me-2"></i>
            Add
          </button>
        </div>

        {education.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== education.length - 1 ? "border-bottom pb-4 mb-4" : ""
            }`}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex">
                <div
                  className="bg-success bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-mortarboard text-success"></i>
                </div>

                <div>
                  <h5 className="fw-semibold mb-1">{item.degree}</h5>

                  <p className="text-muted mb-2">{item.institute}</p>

                  <div className="small text-muted">
                    <div className="mb-1">
                      <i className="bi bi-calendar3 me-2"></i>
                      {item.duration}
                    </div>

                    <div>
                      <i className="bi bi-book me-2"></i>
                      {item.field}
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

export default EducationCard;
