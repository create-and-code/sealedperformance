import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form";
import http from "../services/httpService";
import logger from "../services/logService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";

class ContactPage extends Form {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    phone: Joi.number()
      .required()
      .label("Phone"),
    subject: Joi.string()
      .required()
      .label("Subject"),
    message: Joi.string()
      .required()
      .label("Message")
  };

  doSubmit = async () => {
    try {
      const { data } = await http.post(apiUrl + "/mail", this.state.data);
      toast.success(data);
      this.setState({
        data: {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        }
      });
    } catch (ex) {
      logger.log(ex);
      toast.error("An unexpected error occurred.");
    }
  };

  render() {
    return (
      <div className="container page contact">
        <h1>Contact</h1>
        <p>Please contact us using the form below.</p>

        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("name", "Name *")}
          {this.renderInput("email", "Email *", "email")}
          {this.renderInput("phone", "Phone *", "tel")}
          {this.renderInput("subject", "Subject *")}
          {this.renderTextarea("message", "Message *")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default ContactPage;
