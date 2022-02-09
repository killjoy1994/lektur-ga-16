import { Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardCourse from "./components/DashboardCourse/DashboardCourse";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import ContentVideo from "./pages/ContentVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-content" element={<ContentVideo />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
