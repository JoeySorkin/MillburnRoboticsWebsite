

import React from 'react'
import {useState} from 'react'
import{AppBar, Button, ButtonGroup, Toolbar, Box} from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';

//Interface for PROPS
interface NavElemProps{
    children: string
}

//RFC
const NavElem = (props: NavElemProps) => {
    //Stylinge
    const ButtonStyles = {
        fontSize: 20,
        padding: "10px 25px"
    }
    const ButtonFlex = 2;
    return(
        <Button style={ButtonStyles}>{props.children}</Button>
    )
}
export default NavElem;