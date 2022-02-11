import React from "react";
import Navbar from "../components/Header/Navbar";
import DashboardCourse from "../components/DashboardCourse/DashboardCourse";
import Footer from "../components/Footer";

const StudentDashboard = () => {
  return (
    <div>
      <Navbar />
      <DashboardCourse />
      <Footer />
    </div>
  );
};

export default StudentDashboard;
