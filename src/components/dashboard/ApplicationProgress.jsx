const stats = [
  {
    title: "Applied",
    value: 18,
    color: "primary",
  },
  {
    title: "Under Review",
    value: 8,
    color: "warning",
  },
  {
    title: "Interview",
    value: 3,
    color: "success",
  },
  {
    title: "Rejected",
    value: 7,
    color: "danger",
  },
];

const ApplicationProgress = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mt-4">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Application Overview</h5>

        <div className="row g-4">
          {stats.map((item) => (
            <div key={item.title} className="col-md-3">
              <div className="text-center">
                <h2 className={`fw-bold text-${item.color}`}>{item.value}</h2>

                <p className="text-muted mb-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="progress mt-4" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-primary"
            style={{ width: "50%" }}
          ></div>

          <div
            className="progress-bar bg-warning"
            style={{ width: "20%" }}
          ></div>

          <div
            className="progress-bar bg-success"
            style={{ width: "10%" }}
          ></div>

          <div
            className="progress-bar bg-danger"
            style={{ width: "20%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProgress;
