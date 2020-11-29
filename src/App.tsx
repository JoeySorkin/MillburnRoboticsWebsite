import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Hero from './Components/Hero/Hero'
import SubHero from './Components/SubHero/SubHero';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavigationBar/>
      <Hero/>
      <SubHero/>
      </ThemeProvider>
    </div>
  );
}

export default App;
