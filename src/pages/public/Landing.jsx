import RecentJobs from "../../components/landing/RecentJobs";
import HeroSection from "../../components/landing/HeroSection";
import CTASection from "../../components/landing/CTASection";
import FeaturedJobs from "../../components/landing/FeaturedJobs";
import LandingNavbar from "../../components/landing/LandingNavbar";
import TrustedCompanies from "../../components/landing/TrustedCompanies";

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <CTASection />
      <FeaturedJobs />
      <RecentJobs />
      <TrustedCompanies />s
    </>
  );
}

export default LandingPage;
