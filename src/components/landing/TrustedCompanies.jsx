import CompanyCard from "./CompanyCard";
export const companies = [
  {
    id: 1,
    name: "Google",
    icon: "bi-google",
    color: "#4285F4",
  },
  {
    id: 2,
    name: "Microsoft",
    icon: "bi-microsoft",
    color: "#00A4EF",
  },
  {
    id: 3,
    name: "Amazon",
    icon: "bi-box-seam",
    color: "#FF9900",
  },
  {
    id: 4,
    name: "Netflix",
    icon: "bi-play-circle-fill",
    color: "#E50914",
  },
  {
    id: 5,
    name: "Adobe",
    icon: "bi-palette-fill",
    color: "#FF0000",
  },
  {
    id: 6,
    name: "Spotify",
    icon: "bi-spotify",
    color: "#1DB954",
  },
];

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
