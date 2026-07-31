import RecentJobItem from "./RecentJobItem";
export const recentJobs = [
  {
    id: 1,
    company: "Google",
    title: "Software Engineer",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹28L - ₹40L",
    posted: "2 hours ago",
    logo: "G",
  },
  {
    id: 2,
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Hyderabad",
    type: "Hybrid",
    salary: "₹18L - ₹25L",
    posted: "5 hours ago",
    logo: "M",
  },
  {
    id: 3,
    company: "Amazon",
    title: "Backend Engineer",
    location: "Chennai",
    type: "Remote",
    salary: "₹22L - ₹32L",
    posted: "Yesterday",
    logo: "A",
  },
  {
    id: 4,
    company: "Adobe",
    title: "UI/UX Designer",
    location: "Pune",
    type: "Full Time",
    salary: "₹14L - ₹20L",
    posted: "2 days ago",
    logo: "A",
  },
];
const RecentJobs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Recently Posted Jobs</h2>

          <p className="text-muted">
            Fresh opportunities from leading companies.
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          {recentJobs.map((job) => (
            <RecentJobItem key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;
