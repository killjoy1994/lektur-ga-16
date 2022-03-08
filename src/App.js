import { Routes, Route } from "react-router-dom";

import "./App.css";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import LupaPassword from "./pages/LupaPassword/LupaPassword";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail";
import ContentVideo from "./pages/ContentVideo";
import FinalAssessment from "./pages/studentAssessment/FinalAssessment";
import FinalAssessmentResult from "./pages/studentAssessment/FinalAssessmentResult";
import ErrorPage from "./errorPage/ErrorPage";
import SearchCourse from "./pages/SearchCourses/SearchCourse";
import Categories from "./pages/Categories/Categories";
import PrivateRoutes from "./pages/PrivateRoutes/PrivateRoutes";
import SuccessRegister from "./pages/successRegister/successRegister";
import CourseInvitation from "./pages/CourseInvitation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lupa-password" element={<LupaPassword />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/registered" element={<SuccessRegister />} />
        {/* <Route path="/final-assessment" element={<FinalAssessment />} />
        <Route path="/final-assessment-result" element={<FinalAssessmentResult />} /> */}
        <Route path="/search/:input" element={<SearchCourse />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="/course-invitation" element={<CourseInvitation />} />
        {/* Private Routes start*/}
        <Route element={<PrivateRoutes />}>
          <Route path="/final-assessment" element={<FinalAssessment />} />
          <Route path="/final-assessment-result" element={<FinalAssessmentResult />} />
          <Route path="/course-content" element={<ContentVideo />} />
          <Route path="/course-content/:courseId" element={<ContentVideo />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
        {/* Private Routes end */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
