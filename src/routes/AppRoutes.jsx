import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/public/Landing";
import Login from "../pages/auth/Login";

import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<RecruiterDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
