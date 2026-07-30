const BookmarkFilters = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
      {/* Filter Pills */}
      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-primary rounded-pill px-4">
          All Bookmarks (12)
        </button>

        <button className="btn btn-outline-secondary rounded-pill px-4">
          Expiring Soon
        </button>

        <button className="btn btn-outline-secondary rounded-pill px-4">
          Remote Only
        </button>
      </div>

      {/* Sort */}
      <div className="d-flex align-items-center gap-2">
        <span className="text-muted">Sort by:</span>

        <select
          className="form-select border-0 fw-semibold"
          style={{ width: "180px" }}
        >
          <option>Recently Saved</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Salary</option>
        </select>
      </div>
    </div>
  );
};

export default BookmarkFilters;
