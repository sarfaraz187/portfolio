import "../index.css";
import React from "react";
import logo from "../images/mf-logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse has-text-centered"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="nav-item">
            <a className="nav-link projects-link" href="/">
              Projects
            </a>
          </div>
          <div className="nav-item contact-div">
            {/* <a href="/" className="contact-link nav-link"> */}
            <Link className="contact-link nav-link" to="/contact">
              Say Hello
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
