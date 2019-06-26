import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { toast } from "react-toastify";

class RegisterForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    firstname: Joi.string()
      .required()
      .label("First Name"),
    lastname: Joi.string()
      .required()
      .label("Last Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container page">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("firstname", "First Name *")}
          {this.renderInput("lastname", "Last Name *")}
          {this.renderInput("email", "Email *", "email")}
          {this.renderInput("password", "Password *", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
