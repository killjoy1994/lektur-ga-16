import { Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardCourse from "./components/DashboardCourse/DashboardCourse";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
