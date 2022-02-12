// import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import FinalAssessmentResult from './pages/studentAssessment/FinalAssessmentResult'
import FinalAssessment from './pages/studentAssessment/FinalAssessment'
import Detail from './pages/Detail'

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      {/* <FinalAssessment/> */}
      <FinalAssessmentResult />
      {/* <Home /> */}
      {/* <Detail/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
