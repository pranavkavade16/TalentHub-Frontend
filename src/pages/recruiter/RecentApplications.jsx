import ApplicantRow from "./ApplicantRow";
import MobileApplicantCard from "./MobileApplicantCard";

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
    <div className="card border-0 shadow-sm rounded-3 mt-4">
      {/* Header */}

      <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center py-3 px-4">
        <h5 className="fw-semibold mb-0">Recent Applications</h5>

        <button className="btn btn-link btn-sm text-decoration-none fw-semibold p-0">
          View All
        </button>
      </div>

      {/* Desktop Table */}

      <div className="table-responsive d-none d-lg-block">
        <table className="table align-middle mb-0">
          <thead className="bg-light">
            <tr>
              <th className="text-uppercase text-muted small fw-semibold px-4 py-3">
                Applicant
              </th>

              <th className="text-uppercase text-muted small fw-semibold py-3">
                Job Title
              </th>

              <th className="text-uppercase text-muted small fw-semibold py-3">
                Applied
              </th>

              <th className="text-uppercase text-muted small fw-semibold py-3">
                Experience
              </th>

              <th className="text-uppercase text-muted small fw-semibold py-3">
                Status
              </th>

              <th className="py-3"></th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((applicant) => (
              <ApplicantRow key={applicant.id} applicant={applicant} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="d-lg-none p-3">
        {applicants.map((applicant) => (
          <MobileApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>

      {/* Footer */}

      <div className="card-footer bg-white border-top px-4 py-3 d-flex justify-content-between align-items-center">
        <small className="text-muted">
          Showing <strong>5</strong> of <strong>245</strong> applications
        </small>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light btn-sm border">
            <i className="bi bi-chevron-left"></i>
          </button>

          <span className="small text-muted">
            Page <strong>1</strong> of <strong>49</strong>
          </span>

          <button className="btn btn-light btn-sm border">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentApplications;
