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
import SearchCourse from "./pages/SearchCourse";
import Categories from "./pages/Categories/Categories";
import PrivateRoutes from "./pages/PrivateRoutes/PrivateRoutes";

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
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/detail/:courseId" element={<Detail />} />
        <Route path="/categories/:name" element={<Categories />} />
        {/* Private Routes start*/}
        <Route element={<PrivateRoutes user={true} />}>
          <Route path="/final-assessment" element={<FinalAssessment />} />
          <Route path="/final-assessment-result" element={<FinalAssessmentResult />} />
          <Route path="/course-content" element={<ContentVideo />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
        {/* Private Routes end */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
