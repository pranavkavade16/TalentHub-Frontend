import { useState } from "react";

import JobHeader from "../../components/jobs/JobHeader";
import JobTabs from "../../components/jobs/JobTabs";
import JobContent from "../../components/jobs/JobContent";
import JobSidebar from "../../components/jobs/JobSidebar";
import RecruiterCard from "../../components/jobs/RecruiterCard";
import SimilarJobs from "../../components/jobs/SimilarJobs";

const JobDetails = () => {
  // later this will come from auth
  const role = "recruiter";

  const [activeTab, setActiveTab] = useState("details");

  return (
    <>
      <button className="btn btn-link text-decoration-none px-0 mb-4">
        <i className="bi bi-arrow-left me-2"></i>
        Back to Jobs
      </button>

      <div className="row g-4">
        <div className="col-lg-8">
          <JobHeader />

          <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <JobContent activeTab={activeTab} />
        </div>

        <div className="col-lg-4">
          <JobSidebar role={role} />

          <RecruiterCard />

          <SimilarJobs />
        </div>
      </div>
    </>
  );
};

export default JobDetails;
