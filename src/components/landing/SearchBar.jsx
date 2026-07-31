import Button from "../common/Button";

const SearchBar = () => {
  return (
    <div className="card border-0 shadow-lg rounded-4 p-3 mx-auto">
      <div className="row g-3 align-items-center">
        {/* Job Search */}
        <div className="col-lg-5">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>

            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Job title, keywords or company"
            />
          </div>
        </div>

        {/* Location */}
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-geo-alt text-muted"></i>
            </span>

            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Location or Remote"
            />
          </div>
        </div>

        {/* Button */}
        <div className="col-lg-3 d-grid">
          <Button icon="bi-search">Search Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
