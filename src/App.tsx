import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Fab, Fade } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import theme from "./theme";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Hero from "./Components/Hero/Hero";
import SubHero from "./Components/SubHero/SubHero";
import Teams from "./Components/Teams/Teams";
import OurProgram from "./Components/OurProgram/OurProgram";
import VEX from "./Components/VEX/VEX";
import TeamsPageMain from "./Components/Teams/TeamsPageMain";
import config from "react-reveal/globals";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { init, PageView } from "./Components/Core/Tracker";

config({ ssrFadeout: true });
function App() {
  useEffect(() => {
    init("G-Q0C0F5SBSK");
    PageView();
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <NavigationBar />
          <Switch>
            <div style={{ minHeight: "100%", marginBottom: "-50px" }}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/teams">
                <TeamsPage />
              </Route>
              <Route path="/ourprogram">
                <ProgramPage />
              </Route>
              <Route path="/vex">
                <VexPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <div style={{ height: "150px" }}></div>
            </div>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

function Home() {
  const fabstyles = {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 10,
  };
  return (
    <div>
      {/* PAGE UP BUTTON */}
      <Fade>
        <Fab color="primary" aria-label="pageup">
          <ArrowUpwardIcon />
        </Fab>
      </Fade>
      {/* REAL CONTENT */}

      <div style={{ overflowX: "hidden" }}>
        <Hero />
      </div>

      <br />
      <br />
      <SubHero />
      <OurProgram />
      <br />
      <br />
      <Teams />
      <br />
      <br />

      <br />
      <br />
      <VEX />
      <br />
      <br />

      <br />
      <br />
      <ContactUs />
    </div>
  );
}
function TeamsPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TeamsPageMain />
    </>
  );
}
function ProgramPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <OurProgram />
    </>
  );
}
function VexPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <VEX />
    </>
  );
}
function ContactPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactUs />
    </>
  );
}
export default App;
