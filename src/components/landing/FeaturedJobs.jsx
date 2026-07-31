import LandingJobCard from "./LandingJobCard";
export const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Acme Inc.",
    salary: "₹18L - ₹25L",
    location: "Bangalore",
    workplace: "Remote",
    type: "Full Time",
    featured: true,
  },
  {
    id: 2,
    title: "Lead Product Designer",
    company: "CreativeFlow",
    salary: "₹15L - ₹22L",
    location: "Mumbai",
    workplace: "Hybrid",
    type: "Full Time",
    featured: true,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "DataStream Systems",
    salary: "₹20L - ₹30L",
    location: "Remote",
    workplace: "Remote",
    type: "Contract",
    featured: true,
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="fw-bold mb-2">Featured Opportunities</h2>

            <p className="text-muted">Hand-picked roles from top companies.</p>
          </div>

          <button className="btn btn-link text-decoration-none fw-semibold">
            View All Jobs
          </button>
        </div>

        <div className="row g-4">
          {featuredJobs.map((job) => (
            <div className="col-lg-4 col-md-6" key={job.id}>
              <LandingJobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
