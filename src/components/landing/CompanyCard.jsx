const CompanyCard = ({ company }) => {
  return (
    <div className="company-card text-center">
      <div
        className="company-icon mx-auto"
        style={{
          color: company.color,
        }}
      >
        <i className={`bi ${company.icon}`}></i>
      </div>

      <h5 className="fw-semibold mt-4 mb-1">{company.name}</h5>

      <small className="text-muted">Hiring Now</small>
    </div>
  );
};

export default CompanyCard;
