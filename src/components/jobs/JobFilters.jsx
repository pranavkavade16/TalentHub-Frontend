const JobFilters = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Filters</h5>

          <button className="btn btn-link p-0 text-decoration-none">
            Clear All
          </button>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Search
          </label>

          <input
            className="form-control"
            placeholder="Search job..."
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Status
          </label>

          <select className="form-select">
            <option>All</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Employment Type
          </label>

          <select className="form-select">
            <option>All</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
          </select>
        </div>

        <div>
          <label className="form-label fw-semibold">
            Workplace
          </label>

          <select className="form-select">
            <option>All</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On Site</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default JobFilters;