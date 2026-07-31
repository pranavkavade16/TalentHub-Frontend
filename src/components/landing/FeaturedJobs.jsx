import LandingJobCard from "./LandingJobCard";
import { featuredJobs } from "./featuredJobsData";

const FeaturedJobs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-2">Featured Opportunities</h2>

            <p className="text-muted mb-0">
              Hand-picked roles from top companies.
            </p>
          </div>

          <button className="btn btn-link text-decoration-none">
            View All Jobs
          </button>
        </div>

        <div className="row g-4">
          {featuredJobs.map((job) => (
            <div key={job.id} className="col-md-6 col-xl-4">
              <LandingJobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
