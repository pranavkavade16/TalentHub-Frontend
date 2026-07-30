import ApplicantFilters from "../../components/applicants/ApplicantsFilters";
import ApplicantTable from "../../components/applicants/ApplicantsTable";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";

const Applicants = () => {
  return (
    <>
      <PageHeader
        title="Applicants Management"
        subtitle="Review and manage candidates across all active job postings."
      >
        <Button icon="bi-plus-lg">Post a New Job</Button>
      </PageHeader>

      <ApplicantFilters />

      <ApplicantTable />
    </>
  );
};

export default Applicants;
