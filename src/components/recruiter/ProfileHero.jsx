const ProfileHero = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      {/* Cover */}

      <div className="bg-primary-subtle" style={{ height: "140px" }}></div>

      <div className="card-body px-4 pb-4">
        <div className="row align-items-end">
          {/* Left */}

          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row align-items-md-end">
              <div className="position-relative me-md-4">
                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt=""
                  className="rounded-4 border border-4 border-white shadow"
                  width="120"
                  height="120"
                  style={{ marginTop: "-70px", objectFit: "cover" }}
                />

                <span
                  className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-3 border-white"
                  style={{ width: 18, height: 18 }}
                ></span>
              </div>

              <div className="mt-3 mt-md-0">
                <h2 className="fw-bold mb-2">Alex Thompson</h2>

                <div className="text-muted d-flex flex-wrap gap-3 small">
                  <span>
                    <i className="bi bi-briefcase me-2"></i>
                    Senior Technical Recruiter
                  </span>

                  <span>
                    <i className="bi bi-building me-2"></i>
                    ByteCraft
                  </span>

                  <span>
                    <i className="bi bi-geo-alt me-2"></i>
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="d-flex justify-content-lg-end gap-2">
              <button className="btn btn-outline-secondary">
                <i className="bi bi-share me-2"></i>
                Share
              </button>

              <button className="btn btn-primary">
                <i className="bi bi-pencil-square me-2"></i>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
