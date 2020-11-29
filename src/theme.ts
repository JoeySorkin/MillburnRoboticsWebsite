import { createMuiTheme } from '@material-ui/core/styles';
import colors from './Components/Core/colors'
const theme = createMuiTheme({
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


export default theme