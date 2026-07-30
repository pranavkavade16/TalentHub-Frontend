function JobForm() {
  return (
    <div className="card border-0 shadow-sm rounded-3">
      <div className="card-body p-4">
        {/* Job Information */}

        <h5 className="fw-semibold mb-4">Job Information</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Job Title</label>

            <input className="form-control" placeholder="Frontend Developer" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Employment Type</label>

            <select className="form-select">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Workplace Type</label>

            <select className="form-select">
              <option>On Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Vacancies</label>

            <input type="number" className="form-control" placeholder="1" />
          </div>
        </div>

        <hr className="my-5" />

        {/* Description */}

        <h5 className="fw-semibold mb-4">Job Details</h5>

        <div className="mb-3">
          <label className="form-label">Job Description</label>

          <textarea
            rows="6"
            className="form-control"
            placeholder="Describe the role..."
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Responsibilities</label>

          <textarea
            rows="4"
            className="form-control"
            placeholder="One responsibility per line"
          ></textarea>
        </div>

        <div>
          <label className="form-label">Requirements</label>

          <textarea
            rows="4"
            className="form-control"
            placeholder="One requirement per line"
          ></textarea>
        </div>

        <hr className="my-5" />

        {/* Skills */}

        <h5 className="fw-semibold mb-4">Skills & Experience</h5>

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Experience Level</label>

            <select className="form-select">
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Minimum Experience</label>

            <input type="number" className="form-control" placeholder="1" />
          </div>

          <div className="col-md-4">
            <label className="form-label">Maximum Experience</label>

            <input type="number" className="form-control" placeholder="5" />
          </div>

          <div className="col-12">
            <label className="form-label">Skills</label>

            <input
              className="form-control"
              placeholder="React, Node.js, MongoDB"
            />

            <small className="text-muted">Separate skills using commas.</small>
          </div>
        </div>

        <hr className="my-5" />

        {/* Salary */}

        <h5 className="fw-semibold mb-4">Salary</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Minimum Salary</label>

            <input
              type="number"
              className="form-control"
              placeholder="600000"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Maximum Salary</label>

            <input
              type="number"
              className="form-control"
              placeholder="1200000"
            />
          </div>
        </div>

        <hr className="my-5" />

        {/* Location */}

        <h5 className="fw-semibold mb-4">Location</h5>

        <div className="row g-3">
          <div className="col-md-4">
            <input className="form-control" placeholder="City" />
          </div>

          <div className="col-md-4">
            <input className="form-control" placeholder="State" />
          </div>

          <div className="col-md-4">
            <input className="form-control" placeholder="Country" />
          </div>
        </div>

        <hr className="my-5" />

        {/* Application */}

        <h5 className="fw-semibold mb-4">Application</h5>

        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Application Deadline</label>

            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
