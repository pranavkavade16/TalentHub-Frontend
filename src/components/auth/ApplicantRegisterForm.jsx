import Button from "../common/Button";

const ApplicantRegisterForm = () => {
  return (
    <form>
      {/* Name */}

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">First Name</label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-person"></i>
            </span>

            <input type="text" className="form-control" placeholder="John" />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Last Name</label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-person"></i>
            </span>

            <input type="text" className="form-control" placeholder="Doe" />
          </div>
        </div>
      </div>

      {/* Email */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Email Address</label>

        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-envelope"></i>
          </span>

          <input
            type="email"
            className="form-control"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Password */}

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Password</label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-lock"></i>
            </span>

            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Confirm Password</label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-lock"></i>
            </span>

            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>

      {/* Experience */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Experience</label>

        <select className="form-select">
          <option>Select Experience</option>

          <option>Fresher</option>

          <option>1-2 Years</option>

          <option>3-5 Years</option>

          <option>5+ Years</option>
        </select>
      </div>

      {/* Location */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Current Location</label>

        <input type="text" className="form-control" placeholder="Pune" />
      </div>

      {/* Skills */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Skills</label>

        <input
          type="text"
          className="form-control"
          placeholder="React, Node.js, MongoDB"
        />

        <small className="text-muted">
          Separate multiple skills with commas.
        </small>
      </div>

      {/* Resume */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Resume</label>

        <input type="file" className="form-control" />
      </div>

      {/* Terms */}

      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="terms" />

        <label className="form-check-label" htmlFor="terms">
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Submit */}

      <Button className="w-100">Create Applicant Account</Button>
    </form>
  );
};

export default ApplicantRegisterForm;
