import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ICast from "./screens/Icast";
import ContactForm from "./screens/Contact";
import VenuMap from "./screens/VenuMap";
import CallForContent from "./screens/CallForContent";
import Expositions from "./screens/Expositions";
import AimsPage from "./screens/Aims";
import Registration from "./screens/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ICast />} />
          <Route path="/content" element={<CallForContent/>}/>
          <Route path="/expo" element={<Expositions/>}/>
          <Route path="/aims" element={<AimsPage/>}/>
          <Route path="/registration" element={<Registration/>}/>

          <Route path="/contact" element={<ContactForm />} />
          <Route path="/map" element={<VenuMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
