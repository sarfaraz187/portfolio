const SubHeading = ({ title, description }) => {
  return (
    <div className="container">
      <div className="is-centered">
        <div className="about-layout">
          <div className="about-title">{title}</div>
          <p className="subtitle">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
