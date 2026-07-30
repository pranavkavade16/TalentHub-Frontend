import BookmarkCard from "./BookmarkCard";
export const bookmarkedJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Lumina AI",
    location: "San Francisco, CA",
    type: "Full Time",
    workplace: "Remote",
    salary: "$140k - $180k",
    saved: "2 days ago",
    logo: "L",
  },
  {
    id: 2,
    title: "Lead Frontend Engineer",
    company: "Horizon Fintech",
    location: "New York, NY",
    type: "Contract",
    workplace: "Hybrid",
    salary: "$90 - $120/hr",
    saved: "5 days ago",
    logo: "H",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Vortex Logistics",
    location: "Chicago, IL",
    type: "Full Time",
    workplace: "On-site",
    salary: "$75k - $95k",
    saved: "Yesterday",
    logo: "V",
  },
  {
    id: 4,
    title: "UX Researcher",
    company: "Equinox Health",
    location: "Remote",
    type: "Full Time",
    workplace: "Remote",
    salary: "$110k - $145k",
    saved: "1 week ago",
    logo: "E",
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Stellar Media",
    location: "Los Angeles, CA",
    type: "Full Time",
    workplace: "On-site",
    salary: "$100k - $130k",
    saved: "3 days ago",
    logo: "S",
  },
];

const BookmarkGrid = () => {
  return (
    <>
      <div className="row g-4">
        {bookmarkedJobs.map((job) => (
          <div key={job.id} className="col-12 col-md-6 col-xl-4">
            <BookmarkCard job={job} />
          </div>
        ))}
      </div>

      {/* Pagination */}

      <nav className="mt-5">
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
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BookmarkGrid;
