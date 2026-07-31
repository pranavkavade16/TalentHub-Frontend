import CompanyCard from "./CompanyCard";
import { companies } from "./companiesData";

const TrustedCompanies = () => {
  return (
    <section className="trusted-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Trusted by Leading Companies</h2>

          <p className="text-muted">
            Join thousands of professionals hired by the world's top companies.
          </p>
        </div>

        <div className="row g-4">
          {companies.map((company) => (
            <div key={company.id} className="col-6 col-md-4 col-lg-2">
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
