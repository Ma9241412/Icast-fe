import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ICast from "./screens/Icast";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ICast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
