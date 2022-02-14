import React from "react";

import DashboardCourse from "../components/DashboardCourse/DashboardCourse";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Header/NavbarComponent";

const StudentDashboard = () => {
  return (
    <div>
      <NavbarComponent />
      <DashboardCourse />
      <Footer />
    </div>
  );
};

export default StudentDashboard;
