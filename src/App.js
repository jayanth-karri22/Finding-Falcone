import React from "react";
import "./App.css";
import HomePage from "./components/homepage";
import FindFalconePage from "./components/findfalconepage/index";
import ResultPage from "./components/resultpage/index";
import NotFoundPage from "./components/notfoundpage/index";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {" "}
        <Route exact path="/" component={HomePage} />
        <Route path="/findfalcone" component={FindFalconePage} />
        <Route path="/result" component={ResultPage} />
        <Route path="*" exact={true} component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
