import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import placeholder from './placeholder.png'
import colors from '../Core/colors'
export default function Hero() {
    const useStyles = makeStyles((theme)=>({
        wrapper:{ 
            margin: "-10px 0px 0px 0px",
            width: "100vw",
            height: "70vh",
            background: "url(" + placeholder + ") no-repeat center center",
            // backgroundSize: "cover"
        },
        heroimage:{

        },
        centerdiv:{
            justifyContent: 'center',
            margin: "20vh auto",
            position: "absolute"
        },
        centertext:{
            width: "100vw",
            fontSize: "100px",
            lineHeight: "100px"
        }
    }));
    const classes = useStyles();
    return (
        <div className = {classes.wrapper} style = {{}}>
            <div className = {classes.centerdiv}>
                <Typography variant = "h5" align="center" className = {classes.centertext}>
                Millburn <br/> Robotics
                </Typography>
            </div>
        </div>
    )
}
