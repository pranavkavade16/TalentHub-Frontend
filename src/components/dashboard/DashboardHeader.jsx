const DashboardHeader = ({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
      <div>
        <h2 className="fw-bold mb-1">{title}</h2>

        <p className="text-secondary mb-0">{subtitle}</p>
      </div>

      {buttonText && (
        <button className="btn btn-primary" onClick={onClick}>
          <i className={`bi ${buttonIcon} me-2`}></i>

          {buttonText}
        </button>
      )}
    </div>
  );
};

export default DashboardHeader;
