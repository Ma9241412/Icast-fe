import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ICast from "./screens/Icast";
import ContactForm from "./screens/Contact";
import VenuMap from "./screens/VenuMap";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ICast />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/map" element={<VenuMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
