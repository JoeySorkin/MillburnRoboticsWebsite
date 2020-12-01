import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {Fab, Fade} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import theme from './theme'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Hero from './Components/Hero/Hero'
import SubHero from './Components/SubHero/SubHero';
import Teams from './Components/Teams/Teams';
import OurProgram from './Components/OurProgram/OurProgram';
import VEX from './Components/VEX/VEX';
import TeamsPageMain from './Components/Teams/TeamsPageMain'
import config from 'react-reveal/globals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
config({ ssrFadeout: true });
function App() {

  return (
    <div className="App" >
      <ThemeProvider theme={theme} >
      <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/teams">
         <TeamsPage/>
        </Route>
        <Route path="/ourprogram">
         <ProgramPage/>
        </Route>
        <Route path="/vex">
         <VexPage/>
        </Route>
        <Route path="/contact">
         <ContactPage/>
        </Route>
      </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

function Home() {
  const fabstyles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 10
  }
  return (
    <div>

      {/* PAGE UP BUTTON */}
      <Fade>
      <Fab color="primary" aria-label="pageup">
          <ArrowUpwardIcon/>
      </Fab>
      </Fade>
      {/* REAL CONTENT */}
      
      <div style={{overflowX: 'hidden'}}>
      <Hero />
      </div>
     
      <br/>
      <br/>
      <SubHero/>
      <OurProgram/>
      <br/>
      <br/>
      <Teams/>
      <br/>
      <br/>
 
      <br/>
      <br/>
      <VEX/>
    </div>
  )
}
function TeamsPage(){
  return(
    <>
    
    <TeamsPageMain/>
    </>
  )
}
function ProgramPage(){
  return(
    <>
    

    </>
  )
}
function VexPage(){
  return(
    <>
    

    </>
  )
}
function ContactPage(){
  return(
    <>
    

    </>
  )
}
export default App;
