import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homePage";
import Shop from "./pages/shop";
import ContactPage from "./pages/contactPage";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductPage from "./pages/productPage";
import BasketPage from "./pages/basketPage";
import OrdersPage from "./pages/ordersPage";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/:category" component={Shop} />
            <Route path="/shop/product/:id" component={ProductPage} />
            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/basket" component={BasketPage} />
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
