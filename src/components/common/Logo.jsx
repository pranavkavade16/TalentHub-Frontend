import { NavLink } from "react-router-dom";

const Logo = ({ size = "md" }) => {
  const config = {
    sm: {
      box: 36,
      text: "fs-5",
      initials: "fs-6",
    },
    md: {
      box: 42,
      text: "fs-4",
      initials: "fs-5",
    },
    lg: {
      box: 52,
      text: "fs-3",
      initials: "fs-4",
    },
  };

  const current = config[size];

  return (
    <NavLink to="/" className="d-flex align-items-center text-decoration-none">
      <div
        className="bg-primary rounded-3 text-white fw-bold d-flex justify-content-center align-items-center"
        style={{
          width: current.box,
          height: current.box,
        }}
      >
        <span className={current.initials}>TH</span>
      </div>

      <span className={`ms-2 fw-bold text-dark ${current.text}`}>
        Talent<span className="text-primary">Hub</span>
      </span>
    </NavLink>
  );
};

export default Logo;
