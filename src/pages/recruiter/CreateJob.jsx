import Button from "../../components/common/Button";
import PageHeader from "../../components/common/PageHeader";
import JobForm from "../../components/jobs/JobForm";

function CreateJob() {
  return (
    <>
      <PageHeader
        title="Create New Job"
        subtitle="Create and publish a new job posting."
      >
        <div className="d-flex gap-2">
          <Button variant="outline-secondary">Save Draft</Button>

          <Button icon="bi-check-lg">Publish Job</Button>
        </div>
      </PageHeader>

      <JobForm />
    </>
  );
}

export default CreateJob;
