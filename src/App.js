import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRGenerator from "./components/QRGenerator";
import Welcome from "./pages/Welcome";
import Food from "./pages/food";
import Service from "./pages/service";
import Experience from "./pages/experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/food" element={<Food />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
    </Router>
  );
}

export default App;