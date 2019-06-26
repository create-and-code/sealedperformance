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
import MyOrdersPage from "./pages/account/MyOrdersPage";
import ViewOrderPage from "./pages/account/ViewOrderPage";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = await auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Header user={user} />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/:category" component={Shop} />
            <Route exact path="/shop/product/:id" component={ProductPage} />
            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/basket" component={BasketPage} />
            <Route exact path="/order/:id" component={OrdersPage} />

            <Route
              exact
              path="/account/orders"
              render={props => <MyOrdersPage {...props} user={user} />}
            />
            <Route
              exact
              path="/account/orders/:id"
              render={props => <ViewOrderPage {...props} user={user} />}
            />

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
