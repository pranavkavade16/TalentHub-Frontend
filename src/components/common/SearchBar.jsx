const SearchBar = ({ placeholder = "Search...", className = "", ...props }) => {
  return (
    <div className={`position-relative ${className}`}>
      <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>

      <input
        className="form-control rounded-pill ps-5 py-2"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
