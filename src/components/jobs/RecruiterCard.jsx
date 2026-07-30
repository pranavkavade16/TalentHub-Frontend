const RecruiterCard = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Recruiter</h5>

        <div className="d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/100?img=12"
            className="rounded-circle me-3"
            width="55"
            height="55"
            alt=""
          />

          <div>
            <h6 className="fw-semibold mb-1">Rohit Sharma</h6>

            <small className="text-muted">Senior Talent Partner</small>
          </div>
        </div>

        <button className="btn btn-link text-decoration-none px-0 mt-3">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default RecruiterCard;
