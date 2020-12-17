import designer from "../images/designer.svg";
import frontend from "../images/frontend.svg";
import mentor from "../images/mentor.svg";
const Skills = () => {
  return (
    <div className="container is-narrow shadow-sm">
      <div className="row skill-height">
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="designer" src={designer}></img>
          </figure>
          <h3 className="title is-size-4 is-spaced my-5">Designer</h3>
        </div>
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="frontend" src={frontend}></img>
          </figure>
        </div>
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="mentor" src={mentor}></img>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Skills;
