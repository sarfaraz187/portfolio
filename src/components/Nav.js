import "../index.css";
import logo from "../images/mf-logo.svg";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img alt="logo" src={logo} />
        </a>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="nav-item">
            <a className="nav-link projects-link" href="/">
              Projects
            </a>
          </div>
          <div className="nav-item contact-div">
            <a href="/" className="contact-link nav-link">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
