import React from "react";
import designer from "../images/designer.svg";
import frontend from "../images/frontend.svg";
import mentor from "../images/mentor.svg";

const Skills = () => {
  return (
    <div className="container is-narrow skills-layout shadow-sm">
      <div className="row skill-height">
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="designer" src={designer}></img>
          </figure>
          <h3 className="title is-size-4 is-spaced my-5">Open-source</h3>
          <p className="content">
            I have had time to contribute towards the Freshworks community. With
            a PR to the Freshworks marketplace sample apps Github repository.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal ">
            Things I enjoy designing:
          </p>
          <p className="content">UX, UI, Web, Mobile, Apps, Logos</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Dev Tools:
          </p>
          <ul className="list content">
            <li>Freshdesk SDK</li>
            <li>FullContact API's</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="frontend" src={frontend}></img>
          </figure>
          <h3 className="title is-size-4 is-spaced my-5">
            Front-end Developer
          </h3>
          <p className="content">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Languages I speak:
          </p>
          <p className="content">HTML, CSS, Javascript, React</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Dev Tools:
          </p>
          <ul className="list content">
            <li>Bitbucket</li>
            <li>Bootstrap</li>
            <li>Github</li>
            <li>Codepen</li>
            <li>ESlint</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="mentor" src={mentor}></img>
          </figure>
          <h3 className="title is-size-4 is-spaced my-5">Achivements</h3>
          <p className="content">
            One of the Freshworks Developer Community Champions for providing
            contributions via solutions, helpful feedback and discussions for
            the developer community..
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Knowledge I draw from:
          </p>
          <p className="content">Medium, Techcrunch, Codecamp, Dev community</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Study Stats:
          </p>
          <ul className="list content">
            <li>4 courses in Frontend Masters</li>
            <li>3 Courses in Udemy</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
