const Input = ({
  label,
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-semibold">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        className={`form-control rounded-3 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
