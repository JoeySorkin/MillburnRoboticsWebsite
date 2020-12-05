import { createMuiTheme } from '@material-ui/core/styles';
import colors from './Components/Core/colors'
let theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue,
      contrastText: '#ffffff'
    },
    secondary: {
      main: colors.pink,
    },
  },
});
theme.typography.h1 = {
  fontFamily: "Spartan",
  fontSize: "100px"
}
export default theme