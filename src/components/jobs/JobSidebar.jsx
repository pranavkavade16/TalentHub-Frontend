import Button from "../common/Button";

const JobSidebar = ({ role }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body">
        {role === "applicant" ? (
          <>
            <h5 className="fw-bold mb-4">Apply for this Job</h5>

            <Button className="w-100 mb-3">Apply Now</Button>

            <Button
              variant="outline-primary"
              className="w-100"
              icon="bi-bookmark"
            >
              Save Job
            </Button>
          </>
        ) : (
          <>
            <h5 className="fw-bold mb-4">Recruiter Actions</h5>

            <Button className="w-100 mb-3" icon="bi-pencil">
              Edit Job
            </Button>

            <Button
              variant="outline-warning"
              className="w-100 mb-3"
              icon="bi-archive"
            >
              Archive Job
            </Button>

            <Button variant="outline-danger" className="w-100" icon="bi-trash">
              Delete Job
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default JobSidebar;
