
import { Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardCourse from "./components/DashboardCourse/DashboardCourse";
import Home from "./pages/Home";
<<<<<<< HEAD
import StudentDashboard from "./pages/StudentDashboard";
import ContentVideo from "./pages/ContentVideo";
=======
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail";
import ContentVideo from "./pages/ContentVideo";
import FinalAssessment from "./pages/studentAssessment/FinalAssessment";
import ErrorPage from "./errorPage/ErrorPage";

>>>>>>> c9dc85d163cc58f42eea452bc3fd1def5df11e1b

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/course-content" element={<ContentVideo />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/final-assessment" element={<FinalAssessment />} />
        <Route path="/course-content-video" element={<ContentVideo />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
>>>>>>> c9dc85d163cc58f42eea452bc3fd1def5df11e1b
      </Routes>
    </div>
  );
}

export default App;
