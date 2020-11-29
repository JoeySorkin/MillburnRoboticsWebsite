

import React from 'react'
import {useState} from 'react'
import{AppBar, Button, ButtonGroup, Toolbar, Box} from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
//Interface for PROPS
interface NavElemProps{
    children: string
}
const useStyles = makeStyles((theme)=>({
    button: {
      color: '#fcfcfc',
      fontSize: 20,
      padding: "10px 30px"
    },
  }));

//RFC
const NavElem = (props: NavElemProps) => {
    const classes = useStyles()
    return(
        <Button className={classes.button}>{props.children}</Button>
    )
}
export default NavElem;