import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Shop from "./components/shop";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import "./App.scss";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
