import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRGenerator from "./components/QRGenerator";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;