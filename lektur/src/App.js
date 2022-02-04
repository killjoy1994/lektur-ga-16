import './App.css';

import Login from './pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Header/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Login />
      {/* <Navbar />
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
