import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import Header from "./components/header";
import Footer from "./components/footer";
import Product from "./pages/product";
import Basket from "./pages/basket";
import CheckoutPage from "./pages/checkout";
import OrdersPage from "./pages/orders";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/product/:id" component={Product} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/basket" component={Basket} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/orders/:id" component={OrdersPage} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
