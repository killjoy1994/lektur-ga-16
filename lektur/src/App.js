import { Routes, Route } from "react-router-dom";

import "./App.css";
import ErrorPage from './errorPage/ErrorPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ErrorPage />} />
        {/* <Route path="/signup" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
