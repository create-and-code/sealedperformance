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
import ProductPage from "./pages/productPage";
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
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/product/:id" component={ProductPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/orders/:id" component={OrdersPage} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />
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
