import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import StartupSign from "./components/Startup/StartupSign";
import StartupSearch from "./components/Startup/StartupSearch";
import StartupChat from "./components/Startup/StartupChat";
import StartupProfile from "./components/Startup/StartupProfile";
import StartupExplore from "./components/Startup/StartupExplore";
import StartupServices from "./components/Startup/StartupServices";
import StartupCommunication from "./components/Startup/StartupCommunication";

import ExpertSign from "./components/Expert/ExpertSign";
import FillPersonalInfo from "./components/Expert/FillPersonalInfo";
import ExpertNotifications from "./components/Expert/ExpertNotifications";
import ExpertOffice from "./components/Expert/ExpertOffice";
import ExpertProfile from "./components/Expert/ExpertProfile";
import ExpertMissions from "./components/Expert/ExpertMissions";
import ExpertChat from "./components/Expert/ExpertChat";
import SignIn from "./components/SignIn";
import StartupSearchResults from "./components/Startup/StartupSearchResults";
import StartupCompany from "./components/Startup/StartupCompany";
import StartupProject from "./components/Startup/StartupProject";
import ExpertMission from "./components/Expert/ExpertMission";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signin" exact element={<SignIn />} />

          <Route path="/startup/sign" exact element={<StartupSign />} />
          <Route path="/startup/search" exact element={<StartupSearch />} />
          <Route path="/startup/chat" exact element={<StartupChat />} />
          <Route path="/startup/profile" exact element={<StartupProfile />} />
          <Route path="/startup/company" exact element={<StartupCompany />} />
          <Route path="/startup/explore" exact element={<StartupExplore />} />
          <Route
            path="/startup/services-and-contracts"
            exact
            element={<StartupServices />}
          />
          <Route
            path="/startup/communication"
            exact
            element={<StartupCommunication />}
          />
          <Route
            path="/expert/search-result"
            exact
            element={<StartupSearchResults />}
          />
          <Route
            path="/startup/company/project-1"
            exact
            element={<StartupProject />}
          />

          <Route path="/expert/sign" exact element={<ExpertSign />} />
          <Route
            path="/expert/fill-personal-information"
            exact
            element={<FillPersonalInfo />}
          />
          <Route
            path="/expert/notifications"
            exact
            element={<ExpertNotifications />}
          />
          <Route path="/expert/profile" exact element={<ExpertProfile />} />
          <Route path="/expert/office" exact element={<ExpertOffice />} />
          <Route path="/expert/missions" exact element={<ExpertMissions />} />
          <Route path="/expert/chat" exact element={<ExpertChat />} />
          <Route
            path="/expert/missions/mission-1"
            exact
            element={<ExpertMission />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
