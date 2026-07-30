const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-4">
      <div>
        <h2 className="fw-bold mb-1">{title}</h2>
        <p className="text-muted mb-0">{subtitle}</p>
      </div>

      {children && <div className="mt-3 mt-lg-0">{children}</div>}
    </div>
  );
};

export default PageHeader;
