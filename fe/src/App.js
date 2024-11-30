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
import GovernancePage from "./screens/Governance";
import ThemePage from "./screens/Themes";
import ScreenInProgress from "./NoContent/NoContent";
import Genisis from "./screens/Genesis";
import ICAST2025 from "./screens/Icast2025";
import CallForPapers from "./screens/CallForPapers";
import CallForSessions from "./screens/CallForSessions";
import AuthorResources from "./screens/AuthorResources";
import Grants from "./screens/Grants";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ICast />} />
          <Route path="/content" element={<CallForContent/>}/>
          <Route path="/expo" element={<Expositions/>}/>
          <Route path="/grants" element={<Grants/>}/>
          <Route path="/why-attend" element={<AimsPage/>}/>
          <Route path="/genisis" element={<Genisis/>}/>
          <Route path="/icast-2025" element={<ICAST2025/>}/>
          <Route path="/governance" element={<GovernancePage/>}/>
          <Route path="/call-for-papers" element={<CallForPapers/>}/>
          <Route path="/call-for-session" element={<CallForSessions/>}/>
          <Route path="/author-resources" element={<AuthorResources/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/theme" element={<ThemePage/>}/>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/map" element={<VenuMap />} />
          <Route path="/screen-inprogress" element={<ScreenInProgress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
