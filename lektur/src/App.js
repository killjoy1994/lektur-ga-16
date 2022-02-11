<<<<<<< HEAD

import "./App.css";
import Signupp from "./pages/Signup/Signupp";

=======
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail";
import ContentVideo from "./pages/ContentVideo";
import FinalAssessment from "./pages/studentAssessment/FinalAssessment";
import ErrorPage from "./errorPage/ErrorPage";
>>>>>>> fe80786837f044ea9d3082586ab53ed64356e659

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Signupp />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/final-assessment" element={<FinalAssessment />} />
        <Route path="/course-content-video" element={<ContentVideo />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
>>>>>>> fe80786837f044ea9d3082586ab53ed64356e659
    </div>
  );
}

export default App;
