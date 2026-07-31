const skills = ["Engineering", "Design", "Product Management", "Leadership"];

const BioCard = ({ about }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3">About</h5>

        <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
          I am a Senior Technical Recruiter with over a decade of experience
          hiring top engineering talent for high-growth technology companies. My
          expertise lies in identifying exceptional candidates, building strong
          talent pipelines, and creating outstanding hiring experiences.
        </p>

        <h6 className="fw-semibold mb-3">Specializations</h6>

        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge rounded-pill text-bg-light border px-3 py-2 fw-normal"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioCard;
