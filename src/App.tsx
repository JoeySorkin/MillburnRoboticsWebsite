import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {Fab, Fade} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import theme from './theme'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Hero from './Components/Hero/Hero'
import SubHero from './Components/SubHero/SubHero';

function App() {
  const fabstyles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 10
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      {/* PAGE UP BUTTON */}
      <Fade>
      <Fab style={fabstyles}color="primary" aria-label="pageup">
          <ArrowUpwardIcon/>
      </Fab>
      </Fade>
      {/* REAL CONTENT */}
      <NavigationBar/>
      <Hero/>
      <br/>
      <br/>
      <SubHero/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
