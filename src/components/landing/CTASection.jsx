import { Link } from "react-router-dom";

const cards = [
  {
    title: "Find Your Next Role",
    description:
      "Discover thousands of opportunities from leading companies. Build your profile, apply instantly, and accelerate your career with AI-powered recommendations.",
    icon: "bi-briefcase-fill",
    background: "primary",
    button: "Find Jobs",
    link: "/jobs",
  },
  {
    title: "Hire Top Talent",
    description:
      "Post jobs, discover qualified candidates, and manage your hiring pipeline using AI-powered recruitment tools.",
    icon: "bi-people-fill",
    background: "dark",
    button: "Hire Talent",
    link: "/register",
  },
];

const CTASection = () => {
  return (
    <section className="landing-section py-5">
      <div className="container">
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-lg-6" key={card.title}>
              <div className="cta-card h-100">
                <div className={`cta-icon bg-${card.background}`}>
                  <i className={`bi ${card.icon}`}></i>
                </div>

                <h2 className="fw-bold mb-3">{card.title}</h2>

                <p className="text-muted mb-5">{card.description}</p>

                <Link to={card.link} className="cta-link">
                  {card.button}

                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
