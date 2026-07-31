import { Link } from "react-router-dom";
import RoleCard from "./RoleCard";

const RegisterSidebar = ({ role, setRole }) => {
  return (
    <div className="h-100 bg-light p-5 d-flex flex-column">
      {/* Logo */}

      <div className="d-flex align-items-center mb-5">
        <div
          className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center"
          style={{
            width: 50,
            height: 50,
          }}
        >
          <i className="bi bi-lightning-charge-fill"></i>
        </div>

        <h2 className="fw-bold ms-3 mb-0">TalentHub</h2>
      </div>

      {/* Heading */}

      <h1 className="fw-bold display-6 mb-3">Create your account</h1>

      <p className="text-muted mb-5">
        Join TalentHub and take the next step in your career or hiring journey.
      </p>

      {/* Role Selection */}

      <h5 className="fw-semibold mb-4">I want to register as</h5>

      <RoleCard
        title="Applicant"
        description="Find jobs, apply and manage your applications."
        icon="bi-briefcase"
        active={role === "applicant"}
        onClick={() => setRole("applicant")}
      />

      <RoleCard
        title="Recruiter"
        description="Post jobs, hire talent and manage applicants."
        icon="bi-building"
        active={role === "recruiter"}
        onClick={() => setRole("recruiter")}
      />

      {/* Bottom */}

      <div className="text-center mt-auto">
        <p className="text-muted mb-2">Already have an account?</p>

        <Link to="/login" className="fw-semibold text-decoration-none">
          Login here
        </Link>
      </div>

      {/* Illustration */}

      <div className="mt-5">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
          alt="Team"
          className="img-fluid rounded-4"
        />
      </div>
    </div>
  );
};

export default RegisterSidebar;
