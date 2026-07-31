import { Routes, Route, BrowserRouter } from "react-router-dom";

import PublicLayout from "../components/layouts/PublicLayout";
import RecruiterLayout from "../components/layouts/RecruiterLayout";
import ApplicantLayout from "../components/layouts/ApplicantLayout";

import Landing from "../pages/public/Landing";
// import Jobs from "../pages/public/Jobs";
// import JobDetails from "../pages/public/JobDetails";

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import CreateJob from "../pages/recruiter/CreateJob";
import Applicants from "../pages/recruiter/Applicants";
import Profile from "../pages/recruiter/Profile";
import HiringAssistant from "../pages/recruiter/HiringAssistant";
import Jobs from "../pages/recruiter/Jobs";
import JobDetails from "../pages/common/JobDetails";
import RegisterPage from "../pages/auth/ResgisterPage";
import ApplicantDashboard from "../pages/applicant/ApplicantDashboard";
import Bookmarks from "../pages/applicant/Bookmarks";
import Applications from "../pages/applicant/Applications";
import ApplicantProfile from "../pages/applicant/ApplicantProfile";
// import Applications from "../pages/applicant/Applications";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} /> */}

        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Route>

        <Route element={<RecruiterLayout />}>
          <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
          <Route path="/recruiter/jobs/create" element={<CreateJob />} />
          <Route path="/recruiter/applicants" element={<Applicants />} />
          <Route path="/recruiter/profile" element={<Profile />} />
          <Route
            path="/recruiter/hiringAIAssistant"
            element={<HiringAssistant />}
          />
          <Route path="/recruiter/jobs" element={<Jobs />} />
          <Route path="/recruiter/jobDetails" element={<JobDetails />} />
        </Route>

        <Route element={<ApplicantLayout />}>
          <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />
          <Route path="/applicant/bookmarks" element={<Bookmarks />} />
          <Route path="/applicant/applications" element={<Applications />} />
          <Route path="/applicant/profile" element={<ApplicantProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
