import Button from "../common/Button";

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <div className="row g-3 align-items-center">
        <div className="col-lg-5">
          <div className="search-input">
            <i className="bi bi-search"></i>

            <input type="text" placeholder="Job title, keywords or company" />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="search-input">
            <i className="bi bi-geo-alt"></i>

            <input type="text" placeholder="Location or Remote" />
          </div>
        </div>

        <div className="col-lg-3 d-grid">
          <Button icon="bi-search">Search Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
