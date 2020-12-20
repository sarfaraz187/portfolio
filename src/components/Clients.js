import company from "../images/goodkind.svg";
import chronicled from "../images/chronicled.svg";

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
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <figure className="p-9">
              <img className="w-100" alt="company" src={company}></img>
            </figure>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <figure className="p-9">
              <img className="w-100" alt="chronicled" src={chronicled}></img>
            </figure>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <figure className="p-9">
              <img className="w-100" alt="company" src={company}></img>
            </figure>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <figure className="p-9">
              <img className="w-100" alt="chronicled" src={chronicled}></img>
            </figure>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
