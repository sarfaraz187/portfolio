import React from "react";
import logo from "../images/mf-logo.svg";
import avatar from "../images/mf-avatar.png";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable no-unused-expressions */

// Form submition faild : Please enter valid email address
const Contact = () => {
  function validator() {
    let errorList = [];
    let email = $("#email").val();
    !isEmail(email) ? errorList.push("Email address") : "";
    !$("#name").val() ? errorList.push("Name") : "";
    !$("#message").val() ? errorList.push("Message") : "";

    if (errorList.length > 0) {
      let errorText = "";
      errorList.forEach((element, index) =>
        index === errorList.length - 1
          ? (errorText += element)
          : (errorText += element + ", ")
      );
      showNotification(
        `Failed to submit form : Please enter valid ${errorText}.`,
        "error"
      );
    } else {
      sendEmail();
    }
  }

  function sendEmail() {
    let url = "https://api.emailjs.com/api/v1.0/email/send";
    let body = {
      service_id: "service_ko56rn8",
      template_id: "template_230ru9v",
      user_id: "user_NGTOygMqF4SnAaH1HsC7Q",
      template_params: {
        from_name: $("#name").val(),
        message: $("#message").val(),
        user_email: $("#email").val(),
      },
    };
    axios
      .post(url, body)
      .then((data) => {
        console.log(data);
        showNotification("Form submitted successfully.", "success");
        $(".clear-input").val("");
      })
      .catch((error) =>
        showNotification(`Failed to submit form : ${error} `, "error")
      );
  }

  function isEmail(email) {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    return testEmail.test(email) ? true : false;
  }

  function showNotification(message, type) {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light is-planner">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
      </nav>
      <div className="is-form-page animate-fadeUp">
        <section className="is-white has-text-centered">
          <div className="container avatar-container">
            <img className="contact-avatar" alt="avatar" src={avatar} />
            <h1 className="contact-title is-spaced">
              Thanks for taking the time to reach out. How can I help you today?
            </h1>
          </div>
        </section>
      </div>
      <form className="container send-email-form">
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-4">
            <label className="form-label mb-2 ml-2" type="text" name="name">
              Name
            </label>
            <input id="name" type="text" className="form-control clear-input" />
          </div>
          <div className="col-lg-6 col-md-12 mt-4">
            <label className="form-label mb-2 ml-2" type="text" name="Email">
              Email
            </label>
            <input
              id="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="form-control clear-input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label
              className="form-label mb-2 mt-4 ml-2"
              type="text"
              for="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="form-control clear-input"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="row has-text-centered submit-div">
          <div className="col contact-div form-group ">
            <Link
              className="contact-link nav-link"
              to="/contact"
              onClick={validator}
            >
              Submit
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Contact;
