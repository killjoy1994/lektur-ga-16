import "./styles.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
// import Navbar2  from "./components/Header/Navbar2";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        {/* <Navbar2/> */}
      </header>
      <h1 style={{ height: "100vh" }}>content</h1>
      <Footer />
    </div>
  );
}

export default App;
