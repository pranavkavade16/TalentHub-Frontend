import PageHeader from "../../components/common/PageHeader";
import JobFilters from "../../components/jobs/JobFilters";
import ApplicationGrid from "../../components/applicants/ApplicationGrid";

const Applications = () => {
  return (
    <>
      <PageHeader
        title="My Applications"
        subtitle="Track and manage your job applications."
      />

      <div className="row g-4">
        <div className="col-lg-3">
          <JobFilters />
        </div>

        <div className="col-lg-9">
          <ApplicationGrid />
        </div>
      </div>
    </>
  );
};

export default Applications;
