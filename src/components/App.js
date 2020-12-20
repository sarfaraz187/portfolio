import About from "./About";
import Clients from "./Clients";
import Intro from "./Intro";
import MyWork from "./MyWork";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  return (
    <div>
      <Nav />
      <section className="intro-layout has-text-centered">
        <Intro />
      </section>
      <section className="section is-primary has-text-centered">
        <About />
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
      <section className="section has-text-centered">
        <Projects />
      </section>
    </div>
  );
};

export default App;
