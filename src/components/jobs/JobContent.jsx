const JobContent = ({ activeTab }) => {
  if (activeTab === "company") {
    return (
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          <h4 className="fw-bold mb-3">About Acme Inc.</h4>

          <p className="text-muted mb-4">
            Acme Inc. is a fast-growing technology company building products
            used by millions of users worldwide. We believe in innovation,
            collaboration and creating products developers love.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h6 className="fw-semibold">Industry</h6>
              <p className="text-muted">Software Development</p>
            </div>

            <div className="col-md-6">
              <h6 className="fw-semibold">Company Size</h6>
              <p className="text-muted">500-1000 Employees</p>
            </div>

            <div className="col-md-6">
              <h6 className="fw-semibold">Website</h6>
              <a href="#">www.acme.com</a>
            </div>

            <div className="col-md-6">
              <h6 className="fw-semibold">Location</h6>
              <p className="text-muted">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === "similar") {
    return (
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body text-center py-5">
          <i className="bi bi-briefcase fs-1 text-primary"></i>

          <h4 className="mt-3 fw-bold">Similar Jobs</h4>

          <p className="text-muted">Similar jobs will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4">
        <section className="mb-5">
          <h4 className="fw-bold mb-3">Job Description</h4>

          <p className="text-muted">
            We are looking for a passionate Frontend Developer to build scalable
            web applications using React, JavaScript and modern web
            technologies. You will work closely with designers, backend
            developers and product managers.
          </p>
        </section>

        <section className="mb-5">
          <h4 className="fw-bold mb-3">Responsibilities</h4>

          <ul className="text-muted">
            <li>Build responsive user interfaces.</li>
            <li>Collaborate with backend developers.</li>
            <li>Write clean reusable code.</li>
            <li>Optimize application performance.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h4 className="fw-bold mb-3">Requirements</h4>

          <ul className="text-muted">
            <li>2+ Years React experience.</li>
            <li>Strong JavaScript fundamentals.</li>
            <li>Git & REST APIs.</li>
            <li>Good communication skills.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h4 className="fw-bold mb-3">Skills</h4>

          <div className="d-flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Redux",
              "Bootstrap",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="badge bg-light text-dark border px-3 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h4 className="fw-bold mb-3">Benefits</h4>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="border rounded-3 p-3">💻 Work From Home</div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-3 p-3">🏥 Health Insurance</div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-3 p-3">🎓 Learning Budget</div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-3 p-3">🌴 Paid Leave</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobContent;
