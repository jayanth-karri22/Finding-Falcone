import React from "react";
import "./App.css";
import HomePage from "./components/homepage";
import FindFalconePage from "./components/findfalconepage/index";
import ResultPage from "./components/resultpage/index";
import NotFound from "./components/notfoundpage/index";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/findfalcone" component={FindFalconePage} />
        <Route path="/result" component={ResultPage} />
        <Route component={NotFound} />
      </Router>
  );
}

export default App;
