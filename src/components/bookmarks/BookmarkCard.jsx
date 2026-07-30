import Button from "../common/Button";

const BookmarkCard = ({ job }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body p-4 d-flex flex-column">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div
            className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center fw-bold"
            style={{
              width: "58px",
              height: "58px",
              fontSize: "1.25rem",
            }}
          >
            {job.logo}
          </div>

          <button className="btn btn-light rounded-circle">
            <i className="bi bi-bookmark-fill text-primary"></i>
          </button>
        </div>

        {/* Job Info */}
        <h5 className="fw-bold mb-1">{job.title}</h5>

        <p className="text-muted mb-4">{job.company}</p>

        {/* Details */}
        <div className="small text-muted mb-4">

          <div className="mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            {job.location}
          </div>

          <div className="mb-2">
            <i className="bi bi-briefcase me-2"></i>
            {job.type}
          </div>

          <div className="mb-2">
            <i className="bi bi-building me-2"></i>
            {job.workplace}
          </div>

          <div>
            <i className="bi bi-cash-stack me-2"></i>
            {job.salary}
          </div>

        </div>

        {/* Footer */}
        <div className="border-top pt-3 mt-auto">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-muted">
              Saved {job.saved}
            </small>

            <span className="badge bg-success-subtle text-success">
              Active
            </span>
          </div>

          <Button className="w-100" icon="bi-send">
            Apply Now
          </Button>

        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;