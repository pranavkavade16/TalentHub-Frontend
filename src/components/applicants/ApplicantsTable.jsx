import ApplicantRow from "./ApplicantRow";
export const applicants = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    image: "https://i.pravatar.cc/150?img=32",
    job: "Frontend Developer",
    experience: "4 Years",
    applied: "2 days ago",
    skills: ["React", "Redux", "Bootstrap"],
    status: "New",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    image: "https://i.pravatar.cc/150?img=12",
    job: "Backend Developer",
    experience: "6 Years",
    applied: "3 days ago",
    skills: ["Node", "Express", "MongoDB"],
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    image: "https://i.pravatar.cc/150?img=47",
    job: "UI/UX Designer",
    experience: "3 Years",
    applied: "5 days ago",
    skills: ["Figma", "Adobe XD", "UI"],
    status: "Rejected",
  },
];

const ApplicantTable = () => {
  return (
    <div className="card border-0 shadow-sm rounded-3">
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4">Applicant</th>
                <th>Job</th>
                <th>Experience</th>
                <th>Skills</th>
                <th>Applied</th>
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
      </div>

      <div className="card-footer bg-white d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 1–3 of 36 applicants</small>

        <nav>
          <ul className="pagination pagination-sm mb-0">
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
      </div>
    </div>
  );
};

export default ApplicantTable;
