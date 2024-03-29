import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteChangeTracker from "./components/RouteChangeTracker";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col
    transition-all bg-l1"
    >
      <RouteChangeTracker />
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
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
