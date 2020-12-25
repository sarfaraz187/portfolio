import React from "react";
import { Link } from "react-router-dom";

const StartProject = () => {
  return (
    <div className="container is-narrow">
      <div className="row box">
        <div className="col-lg-4 col-md-12 my-3">
          <h2 className="m-0 connect">Start a project</h2>
        </div>
        <div className="col-lg-4 col-md-12 my-3">
          <p className="content mb-0">
            Interested in working together? We should queue up a chat. I’ll buy
            the coffee.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 my-3">
          <Link className="button" to="/contact">
            Let's do this
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
