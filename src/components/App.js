import About from "./About";
import Intro from "./Intro";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <section className="has-text-centered intro-layout">
        <Intro />
      </section>
      <section className="is-primary has-text-centered">
        <About />
      </section>
    </div>
  );
};

export default App;
