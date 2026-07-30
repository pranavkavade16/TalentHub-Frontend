import ProfileHero from "../../components/recruiter/ProfileHero";
import RecruiterStats from "../../components/recruiter/RecruiterStats";
import BioCard from "../../components/recruiter/BioCard";
import CompanyCard from "../../components/recruiter/CompanyCard";
import ContactCard from "../../components/recruiter/ContactCard";
import HiringStatusCard from "../../components/recruiter/HiringStatusCard";
import ActiveJobs from "../../components/recruiter/ActiveJobs";

function Profile() {
  return (
    <>
      <ProfileHero />

      <div className="row mt-4 g-4">
        <div className="col-lg-8">
          <RecruiterStats />

          <BioCard />

          <ActiveJobs />
        </div>

        <div className="col-lg-4">
          <CompanyCard />

          <ContactCard />

          <HiringStatusCard />
        </div>
      </div>
    </>
  );
}

export default Profile;
