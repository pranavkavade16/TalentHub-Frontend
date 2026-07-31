import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../../redux/features/auth/authSlice";

import Button from "../../components/common/Button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(result)) {
      const role = result.payload.user.role;

      if (role === "candidate") {
        navigate("/applicant/dashboard");
      } else {
        navigate("/recruiter/dashboard");
      }
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div
        className="card border-0 shadow rounded-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body p-4 p-lg-5">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center mb-4">
              <div
                className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  width: 48,
                  height: 48,
                }}
              >
                <i className="bi bi-briefcase"></i>
              </div>

              <h2 className="fw-bold text-primary ms-3 mb-0">TalentHub</h2>
            </div>

            <h1 className="fw-bold mb-2">Welcome Back!</h1>

            <p className="text-muted">Login to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="form-label fw-semibold">Email Address</label>

              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-envelope"></i>
                </span>

                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>

              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />

                <label htmlFor="remember" className="form-check-label">
                  Remember Me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-decoration-none fw-semibold"
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" className="w-100 py-3" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>

          <div className="text-center mt-5">
            <p className="mb-0">
              Don't have an account?
              <Link
                to="/register"
                className="text-decoration-none fw-bold ms-2"
              >
                Register
              </Link>
            </p>
          </div>

          <hr className="my-5" />

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800"
              alt="Login"
              className="img-fluid rounded-4"
              style={{
                maxHeight: "220px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
