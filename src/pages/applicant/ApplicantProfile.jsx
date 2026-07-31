import ProfileHeader from "../../components/profile/ProfileHeader";
import AboutCard from "../../components/profile/AboutCard";
import SkillsCard from "../../components/profile/SkillsCard";
import ExperienceCard from "../../components/profile/ExperienceCard";
import EducationCard from "../../components/profile/EducationCard";
import ResumeCard from "../../components/profile/ResumeCard";
import ContactCard from "../../components/profile/ContactCard";

const applicant = {
  name: "Pranav Kavade",
  designation: "Frontend Developer",
  company: "Open to Opportunities",
  location: "Pune, India",

  about:
    "Frontend Developer with experience building responsive web applications using React.js, Bootstrap, Redux and Node.js. Passionate about creating intuitive user experiences and scalable applications.",

  skills: [
    "React",
    "JavaScript",
    "Bootstrap",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ],

  experience: [
    {
      company: "Wipro",
      role: "Project Engineer",
      duration: "Jan 2023 - Present",
      location: "Pune",
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      institute: "Savitribai Phule Pune University",
      duration: "2019 - 2023",
    },
  ],

  resume: {
    name: "Pranav_Kavade_Resume.pdf",
    uploaded: "2 weeks ago",
    size: "420 KB",
  },

  contact: {
    email: "pranav@email.com",
    phone: "+91 9876543210",
    linkedin: "linkedin.com/in/pranavkavade",
    github: "github.com/pranavkavade16",
  },
};

function ApplicantProfile() {
  return (
    <>
      <ProfileHeader profile={applicant} />

      <div className="row g-4 mt-1">
        {/* Left */}
        <div className="col-lg-8">
          <AboutCard about={applicant.about} skills={applicant.skills} />

          <ExperienceCard experience={applicant.experience} />

          <EducationCard education={applicant.education} />
        </div>

        {/* Right */}
        <div className="col-lg-4">
          <ResumeCard resume={applicant.resume} />

          <ContactCard contact={applicant.contact} />
        </div>
      </div>
    </>
  );
}

export default ApplicantProfile;
