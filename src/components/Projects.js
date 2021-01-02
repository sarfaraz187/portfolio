import React from "react";
// import houston from "../images/houston.svg";
import tools from "../images/tools.svg";

const Projects = () => {
  return (
    <div className="container grid">
      <div className="row">
        <div className="col-lg-4 col-md-12 p-0 have-margin">
          <figure className="project-box shadow-sm">
            <h1 className="subtitle">KnowIt</h1>
            {/* <img className="mb-5" alt="houston" src={houston}></img> */}
            <figcaption>
              <h3 className="content mb-5">
                A Single page web application built using NewsAPI serving a REST
                API with React as the frontend.
              </h3>
              <a className="project-link disabled" href="/">
                <span className="icon"></span>
                <span>
                  <img className="mb-1" alt="tools" src={tools}></img>
                </span>
                <span className="has-text-primary"> In development</span>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4 col-md-12 p-0 have-margin">
          <figure className="project-box shadow-sm">
            <h1 className="subtitle">ReviewIt</h1>
            {/* <img className="mb-5" alt="houston" src={houston}></img> */}
            <figcaption>
              <h3 className="content mb-5">
                A Web application which uses MoiesDB API to fetch the relavent
                details of user's movie search.
              </h3>
              <a className="project-link disabled" href="/">
                <span className="icon"></span>
                <span>
                  <img className="mb-1" alt="tools" src={tools}></img>
                </span>
                <span className="has-text-primary"> In development</span>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4 col-md-12 p-0 have-margin">
          <figure className="project-box shadow-sm">
            <h1 className="subtitle">Instagram Feed</h1>
            {/* <img className="mb-5" alt="houston" src={houston}></img> */}
            <figcaption>
              <h3 className="content mb-5">
                Next level plug and play chassis systems for custom
                do-it-yourself lightsaber builds. Instagram web app
              </h3>
              <a className="project-link disabled" href="/">
                <span className="icon"></span>
                <span>
                  <img className="mb-1" alt="tools" src={tools}></img>
                </span>
                <span className="has-text-primary"> In development</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Projects;
