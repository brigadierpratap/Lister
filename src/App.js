import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileDisp from "./components/dashboard/ProfileDisp";
import Navbar from "./components/layout/Navbar";
import CreateList from "./components/projects/CreateList";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/list/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateList} />
          <Route path="/profile" component={ProfileDisp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
