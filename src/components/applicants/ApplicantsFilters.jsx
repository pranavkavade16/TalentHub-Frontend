const ApplicantFilters = () => {
  return (
    <div className="card shadow-sm border-0 rounded-3 mb-4">
      <div className="card-body">
        <div className="row g-3 align-items-end">
          <div className="col-lg-3">
            <label className="form-label small fw-semibold">Search</label>

            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search applicant..."
              />
            </div>
          </div>

          <div className="col-lg-2">
            <label className="form-label small fw-semibold">Status</label>

            <select className="form-select">
              <option>All</option>
              <option>New</option>
              <option>Shortlisted</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="col-lg-3">
            <label className="form-label small fw-semibold">Job</label>

            <select className="form-select">
              <option>All Jobs</option>
            </select>
          </div>

          <div className="col-lg-2">
            <label className="form-label small fw-semibold">Applied</label>

            <select className="form-select">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Today</option>
            </select>
          </div>

          <div className="col-lg-2">
            <button className="btn btn-outline-primary w-100">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantFilters;
