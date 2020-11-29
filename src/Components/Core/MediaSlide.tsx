
/*
======================WARNING======================
====================DEPRECATED=====================
DOES NOT WORK
AT ALL
DO NOT USE
:( :(
*/

import React from 'react'
import {Slide, useMediaQuery, Paper } from '@material-ui/core'
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
interface MediaSlidesProps{
    children: any,
    direction: "up" | "left" | "down" | "right",
    breakpoint: 'xs'| 'sm' | 'md' | 'lg' | 'xl',
    appear: boolean
}
export default function MediaSlides(props: MediaSlidesProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up(props.breakpoint)); 
    return (
            <Slide direction={props.direction} in={matches} mountOnEnter unmountOnExit>
                {props.children}
            </Slide>
    )
}
