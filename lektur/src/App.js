// import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import FinalAssessmentResult from './pages/studentAssessment/FinalAssessmentResult'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <FinalAssessment/> */}
      <FinalAssessmentResult />
      {/* <Home /> */}
      {/* <Detail/> */}
      <Footer />
    </div>
  );
}

export default App;
