import JobCard from "./JobCard";
export const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TalentHub",
    salary: "₹18L - ₹24L",
    location: "Pune",
    workplace: "Hybrid",
    applicants: 42,
    views: 312,
    posted: "2 days ago",
    status: "Published",
  },

  {
    id: 2,
    title: "React Developer",
    company: "TalentHub",
    salary: "₹12L - ₹18L",
    location: "Remote",
    workplace: "Remote",
    applicants: 18,
    views: 120,
    posted: "Today",
    status: "Draft",
  },

  {
    id: 3,
    title: "Backend Developer",
    company: "TalentHub",
    salary: "₹20L - ₹28L",
    location: "Bangalore",
    workplace: "On Site",
    applicants: 67,
    views: 501,
    posted: "5 days ago",
    status: "Published",
  },
];

const JobList = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">{jobs.length} Jobs</h3>

          <p className="text-muted mb-0">Showing all your job postings</p>
        </div>

        <select className="form-select" style={{ width: "180px" }}>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Applicants</option>
        </select>
      </div>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {/* Pagination */}

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <button className="page-link">Previous</button>
          </li>

          <li className="page-item active">
            <button className="page-link">1</button>
          </li>

          <li className="page-item">
            <button className="page-link">2</button>
          </li>

          <li className="page-item">
            <button className="page-link">3</button>
          </li>

          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default JobList;
