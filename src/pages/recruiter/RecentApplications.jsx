import ApplicantRow from "./ApplicantRow";

const applicants = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=11",
    name: "Arjun Mehta",
    email: "arjun@gmail.com",
    job: "Frontend Developer",
    date: "24 May 2024",
    experience: "3 Years",
    status: "New",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=18",
    name: "Sneha Reddy",
    email: "sneha@gmail.com",
    job: "Backend Developer",
    date: "23 May 2024",
    experience: "4 Years",
    status: "Shortlisted",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=22",
    name: "Vikram Singh",
    email: "vikram@gmail.com",
    job: "Full Stack Developer",
    date: "22 May 2024",
    experience: "2 Years",
    status: "New",
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?img=30",
    name: "Pooja Verma",
    email: "pooja@gmail.com",
    job: "UI/UX Designer",
    date: "21 May 2024",
    experience: "1 Year",
    status: "Rejected",
  },
];

const RecentApplications = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mt-4">
      <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
        <h5 className="mb-0">Recent Applications</h5>

        <button className="btn btn-link text-decoration-none">View All</button>
      </div>

      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Applicant</th>

              <th>Job Title</th>

              <th>Applied</th>

              <th>Experience</th>

              <th>Status</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((applicant) => (
              <ApplicantRow key={applicant.id} applicant={applicant} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-footer bg-white d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 4 applications</small>

        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>

            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RecentApplications;
