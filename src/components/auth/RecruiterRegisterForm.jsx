import Button from "../common/Button";

const RecruiterRegisterForm = () => {
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

      {/* Company */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Company Name</label>

        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-building"></i>
          </span>

          <input type="text" className="form-control" placeholder="Google" />
        </div>
      </div>

      {/* Designation & Department */}

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Designation</label>

          <input
            type="text"
            className="form-control"
            placeholder="HR Manager"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Department</label>

          <input
            type="text"
            className="form-control"
            placeholder="Human Resources"
          />
        </div>
      </div>

      {/* Contact */}

      <div className="mb-4">
        <label className="form-label fw-semibold">Contact Number</label>

        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-telephone"></i>
          </span>

          <input
            type="tel"
            className="form-control"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      {/* Terms */}

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="recruiterTerms"
        />

        <label className="form-check-label" htmlFor="recruiterTerms">
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Submit */}

      <Button className="w-100">Create Recruiter Account</Button>
    </form>
  );
};

export default RecruiterRegisterForm;
