import About from "./About";
import Intro from "./Intro";
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
      <section className="is-primary has-text-centered">
        <About />
      </section>
      <section className="skill_layout has-text-centered">
        <Skills />
      </section>
      <section className="has-text-centered">
        <Projects />
      </section>
    </div>
  );
};

export default App;
