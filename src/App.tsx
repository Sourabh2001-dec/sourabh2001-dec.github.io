import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col
    transition-all"
    >
      <Router>
        <Navbar />
        <div className="bg-l1 flex-grow flex flex-col">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
