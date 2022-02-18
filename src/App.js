import { Routes, Route } from "react-router-dom";

import "./App.css";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail";
import ContentVideo from "./pages/ContentVideo";
import FinalAssessment from "./pages/studentAssessment/FinalAssessment";
import FinalAssessmentResult from "./pages/studentAssessment/FinalAssessmentResult";
import ErrorPage from "./errorPage/ErrorPage";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/final-assessment" element={<FinalAssessment />} />
        <Route path="/final-assessment-result" element={<FinalAssessmentResult />} />
        <Route path="/course-content" element={<ContentVideo />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
