import Clients from "./Clients";
import Intro from "./Intro";
import MyWork from "./MyWork";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import StartProject from "./StartProject";
import SubHeading from "./SubHeading";

const App = () => {
  const descriptionObj = {
    aboutTitle: "Hi, I’m Sarfaraz. Nice to meet you.",
    aboutDescription:
      "Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
    projectTitle: "My Startup Projects",
    projectDescription:
      "I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.",
  };
  return (
    <div>
      <Nav />
      <section className="intro-layout has-text-centered">
        <Intro />
      </section>
      <section className="section is-primary has-text-centered">
        <SubHeading
          title={descriptionObj.aboutTitle}
          description={descriptionObj.aboutDescription}
        />
      </section>
      <section className="section skill_layout has-text-centered">
        <Skills />
      </section>
      <section className="section is-medium has-text-centered">
        <MyWork />
      </section>
      <section className="section is-medium has-text-centered has-border-top">
        <Clients />
      </section>
      <section className="section is-primary has-text-centered">
        <SubHeading
          title={descriptionObj.projectTitle}
          description={descriptionObj.projectDescription}
        />
      </section>
      <section className="section skill_layout has-text-centered">
        <Projects />
      </section>
      <section className="section call-to-action is-primary has-text-centered">
        <StartProject />
      </section>
    </div>
  );
};

export default App;
