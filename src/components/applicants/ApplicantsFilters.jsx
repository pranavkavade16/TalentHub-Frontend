const ApplicantFilters = () => {
  return (
    <div className="card border-0 shadow-sm rounded-3 mb-4">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-lg-3">
            <label className="form-label small text-muted">Status</label>

            <select className="form-select">
              <option>All Statuses</option>
              <option>New</option>
              <option>Shortlisted</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="col-lg-3">
            <label className="form-label small text-muted">Date Applied</label>

            <select className="form-select">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Today</option>
            </select>
          </div>

          <div className="col-lg-3">
            <label className="form-label small text-muted">Job Title</label>

            <select className="form-select">
              <option>All Job Openings</option>
            </select>
          </div>

          <div className="col-lg-3 d-flex align-items-end">
            <button className="btn btn-light border w-100">
              <i className="bi bi-sliders me-2"></i>
              More Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantFilters;
