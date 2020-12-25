import React from "react";
import logo from "../images/mf-logo.svg";
import avatar from "../images/mf-avatar.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
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
            <input type="text" className="form-control" />
          </div>
          <div className="col-lg-6 col-md-12 mt-4">
            <label className="form-label mb-2 ml-2" type="text" name="Email">
              Email
            </label>
            <input type="text" className="form-control" />
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
            <textarea id="message" className="form-control" rows="6"></textarea>
          </div>
        </div>
        <div className="row has-text-centered submit-div">
          <div className="col contact-div form-group ">
            <Link className="contact-link nav-link" to="/contact">
              Submit
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Contact;
