import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Header/Navbar";
import FinalAssessment from "./pages/studentAssessment/FinalAssessment";
import FinalAssessmentResult from "./pages/studentAssessment/FinalAssessmentResult";


function App() {
  return (
    <div className="App">
      <Navbar />
      <FinalAssessment/>
      {/* <FinalAssessmentResult/> */}
      {/* <Home /> */}
      {/* <Detail/> */}
      <Footer />
    </div>
  );
}

export default App;
