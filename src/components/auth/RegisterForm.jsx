import ApplicantRegisterForm from "./ApplicantRegisterForm";
import RecruiterRegisterForm from "./RecruiterRegisterForm";

const RegisterForm = ({ role }) => {
  return (
    <div className="p-4 p-lg-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Create your account</h1>

        <p className="text-muted mb-0">Fill in your details to get started</p>
      </div>

      {/* Role Switch */}

      <div className="mb-5">
        <div className="row g-0 border rounded-4 overflow-hidden">
          <div
            className={`col-6 py-3 text-center fw-semibold ${
              role === "applicant" ? "bg-primary text-white" : "bg-light"
            }`}
          >
            <i className="bi bi-person me-2"></i>
            Applicant
          </div>

          <div
            className={`col-6 py-3 text-center fw-semibold ${
              role === "recruiter" ? "bg-primary text-white" : "bg-light"
            }`}
          >
            <i className="bi bi-building me-2"></i>
            Recruiter
          </div>
        </div>
      </div>

      {/* Form */}

      {role === "applicant" ? (
        <ApplicantRegisterForm />
      ) : (
        <RecruiterRegisterForm />
      )}
    </div>
  );
};

export default RegisterForm;
