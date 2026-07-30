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
// import Applicants from "../pages/recruiter/Applicants";

// import ApplicantDashboard from "../pages/applicant/Dashboard";
// import Applications from "../pages/applicant/Applications";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} /> */}

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
          {/* <Route path="/recruiter/applicants" element={<Applicants />} />  */}
        </Route>

        {/* <Route element={<ApplicantLayout />}>
          <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />
          <Route path="/applicant/applications" element={<Applications />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
