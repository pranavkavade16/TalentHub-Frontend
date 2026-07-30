import Button from "../../components/common/Button";
import PageHeader from "../../components/common/PageHeader";
import JobForm from "../../components/forms/JobForm";

function CreateJob() {
  return (
    <>
      <PageHeader
        title="Create New Job"
        subtitle="Create and publish a new job posting."
      >
        <div className="d-flex gap-2">
          <Button icon="bi-check-lg">Publish Job</Button>
        </div>
      </PageHeader>

      <JobForm />
    </>
  );
}

export default CreateJob;
