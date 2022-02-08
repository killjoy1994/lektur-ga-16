import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
import Signupp from "./pages/Signup/Signupp";

// import Navbar from "./components/Header/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Signupp />
    </BrowserRouter>
  );
}

export default App;
