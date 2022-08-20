import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import MyWork from "./MyWork";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import StartProject from "./StartProject";
import SubHeading from "./SubHeading";

const App = () => {
  const descriptionObj = {
    aboutTitle: "Nice to meet you.",
    aboutDescription:
      "Since beginning my journey as a web developer i have been qurious i , I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
    projectTitle: "My Startup Projects",
    projectDescription:
      "I'm a bit of a digital product junky. I spend a lot of time in learning things related to Front-end Technologies. Eventually, I decided that it would be a fun challenge to try designing and building my own.",
  };
  return (
    <Router>
      <HashRouter basename='/'>
        <div>
          <Switch>
            <Route path="/" exact>
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
              <section className="section skill-layout has-text-centered">
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
              <section className="section projects-layout has-text-centered">
                <Projects />
              </section>
              <section className="section call-to-action is-primary has-text-centered">
                <StartProject />
              </section>
              <footer className="is-small has-text-centered">
                <Footer />
              </footer>
            </Route>
            {/* <Redirect exact from="/" to="/" /> */}
            <Route path="/contact">
              <section className="animate-fadeDown">
                <Contact />
              </section>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Router>
  );
};

export default App;
