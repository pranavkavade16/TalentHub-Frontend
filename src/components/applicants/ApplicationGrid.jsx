import ApplicationCard from "./ApplicationCard";
export const applications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ByteCraft",
    location: "Pune",
    salary: "₹12L - ₹18L",
    applied: "2 days ago",
    status: "Under Review",
    logo: "B",
  },
  {
    id: 2,
    title: "React Developer",
    company: "TechNova",
    location: "Remote",
    salary: "₹18L - ₹24L",
    applied: "5 days ago",
    status: "Interview",
    logo: "T",
  },
  {
    id: 3,
    title: "UI Designer",
    company: "InnovateX",
    location: "Bangalore",
    salary: "₹10L - ₹14L",
    applied: "1 week ago",
    status: "Rejected",
    logo: "I",
  },
];

const ApplicationGrid = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">{applications.length} Applications</h3>

          <p className="text-muted mb-0">Showing all your applications</p>
        </div>

        <select className="form-select" style={{ width: "180px" }}>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Status</option>
        </select>
      </div>

      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}

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
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ApplicationGrid;
