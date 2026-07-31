import RecentJobs from "../../components/landing/RecentJobs";
import HeroSection from "../../components/landing/HeroSection";
import CTASection from "../../components/landing/CTASection";
import FeaturedJobs from "../../components/landing/FeaturedJobs";
import LandingNavbar from "../../components/landing/LandingNavbar";

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <CTASection />
      <FeaturedJobs />
      <RecentJobs />
    </>
  );
}

export default LandingPage;
