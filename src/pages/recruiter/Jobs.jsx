import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import JobFilters from "../../components/jobs/JobFilters";
import JobList from "../../components/jobs/JobList";

const Jobs = () => {
  return (
    <>
      <PageHeader title="My Jobs" subtitle="Manage all your job postings.">
        <Button icon="bi-plus-lg">Create Job</Button>
      </PageHeader>

      <div className="row g-4">
        <div className="col-lg-3">
          <JobFilters />
        </div>

        <div className="col-lg-9">
          <JobList />
        </div>
      </div>
    </>
  );
};

export default Jobs;
