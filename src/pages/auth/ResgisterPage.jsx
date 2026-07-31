import { useState } from "react";

import RegisterSidebar from "../../components/auth/RegisterSidebar";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  const [role, setRole] = useState("applicant");

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="container">
        <div className="card border-0 shadow rounded-4 overflow-hidden">
          <div className="row g-0">
            {/* Left */}

            <div className="col-lg-4 border-end">
              <RegisterSidebar role={role} setRole={setRole} />
            </div>

            {/* Right */}

            <div className="col-lg-8">
              <RegisterForm role={role} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
