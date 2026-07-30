const Button = ({
  children,
  icon,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} rounded-3 fw-semibold px-4 py-2 ${className}`}
      {...props}
    >
      {icon && <i className={`bi ${icon} me-2`}></i>}

      {children}
    </button>
  );
};

export default Button;
