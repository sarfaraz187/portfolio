import React from "react";
import icertis from "../images/icertis-logo.png";
import freshworks from "../images/Freshworks.png";
import Jellyfish from "../images/jellyfish.png";
import Opendoor from "../images/Opendoor.png";

const Clients = () => {
  return (
    <div className="container is-narrow">
      <div className="is-centered">
        <div className="about-layout">
          <h3 className="title">
            I'm proud to have collaborated with some awesome companies:
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 company-logo">
            <figure className="p-9">
              <img className="w-55" alt="company" src={icertis}></img>
            </figure>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 company-logo">
            <figure className="p-9">
              <img className="w-71" alt="chronicled" src={freshworks}></img>
            </figure>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 company-logo">
            <figure className="p-9 pt-2">
              <img className="w-55" alt="company" src={Jellyfish}></img>
            </figure>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 company-logo">
            <figure className="p-9">
              <img className="w-55" alt="chronicled" src={Opendoor}></img>
            </figure>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
