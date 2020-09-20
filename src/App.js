import React from "react";
import "./App.css";
import HomePage from "./components/homepage";
import FindFalconePage from "./components/findfalconepage/index";
import ResultPage from "./components/resultpage/index";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/findfalcone" component={FindFalconePage} />
        <Route path="/result" render={(history) => <ResultPage {...history}/>} />
      </Router>
  );
}

export default App;
