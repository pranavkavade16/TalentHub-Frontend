import Button from "../common/Button";

const ResumeCard = ({ resume }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body text-center p-4">
        <div
          className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
          style={{
            width: "70px",
            height: "70px",
          }}
        >
          <i
            className="bi bi-file-earmark-pdf text-primary"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>

        <h4 className="fw-bold mb-3">Resume</h4>

        <p className="fw-semibold mb-1">{resume.name}</p>

        <p className="text-muted small mb-1">Uploaded {resume.uploaded}</p>

        <p className="text-muted small mb-4">Size: {resume.size}</p>

        <Button className="w-100" icon="bi-download">
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumeCard;
