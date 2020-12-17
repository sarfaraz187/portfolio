import React from "react";
import avatar from "../images/mf-avatar.png";
import desk from "../images/desk.png";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="intro-body">
        <div className="container">
          <h1 className="title">Designer, Front-end Developer & Mentor</h1>
          <p className="subtitle">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <img className="my-4 avatar" alt="avatar" src={avatar} />
        </div>
      </div>
      <div className="intro-footer">
        <img className="desk" alt="desk" src={desk} />
      </div>
    </React.Fragment>
  );
};

export default Intro;
