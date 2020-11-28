

import React from 'react'
import {useState} from 'react'
import{AppBar, Button, ButtonGroup, Toolbar, Box} from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//Interface for PROPS
interface NavElemProps{
    children: string
}
const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        text: {
          color: 'white',
        },
      },
    },
  });
  
//RFC
const NavElem = (props: NavElemProps) => {
    //Stylinge
    const ButtonStyles = {
        fontSize: 20,
        padding: "10px 25px"
    }
    const ButtonFlex = 2;
    return(
        <ThemeProvider theme={theme}>
        <Button style={ButtonStyles}>{props.children}</Button>
        </ThemeProvider>
    )
}
export default NavElem;