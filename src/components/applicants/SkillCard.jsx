const SkillsCard = ({ skills }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Skills</h4>

          <button className="btn btn-sm btn-outline-primary rounded-pill">
            <i className="bi bi-plus-lg me-2"></i>
            Add
          </button>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fs-6 fw-normal"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
