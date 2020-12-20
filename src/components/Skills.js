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
          <h3 className="title is-size-4 is-spaced my-5">Designer</h3>
          <p className="content">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal ">
            Things I enjoy designing:
          </p>
          <p className="content">UX, UI, Web, Mobile, Apps, Logos</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Design Tools:
          </p>
          <ul className="list content">
            <li>Bootstrap</li>
            <li>Figma</li>
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
          <p className="content">HTML, Pug, Slim, CSS, Sass, Less</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Dev Tools:
          </p>
          <ul className="list content">
            <li>Bitbucket</li>
            <li>Bootstrap </li>
            <li>Github</li>
            <li>Terminal</li>
            <li>Codepen</li>
            <li>ESlint</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 column">
          <figure>
            <img alt="mentor" src={mentor}></img>
          </figure>
          <h3 className="title is-size-4 is-spaced my-5">Mentor</h3>
          <p className="content">
            I genuinely care about people, and love helping fellow designers
            work on their craft.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Experiences I draw from:
          </p>
          <p className="content">UX/UI, Product design, Freelancing</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Mentor Stats:
          </p>
          <ul className="list content">
            <li>5 years experience 42 bootcamps</li>
            <li>26 short courses</li>
            <li>42 bootcamps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
