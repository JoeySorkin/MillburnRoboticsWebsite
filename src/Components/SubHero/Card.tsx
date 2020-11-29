import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import cogwheel from './cog.svg'

import { useState } from 'react';
interface CardProps{
    orient: 'left' | 'right',
    color: any,
    children: any,
    title: string
}
export default function Card(props:CardProps) {
    
    // useEffect(()=>{

    // }, [rotation])
    // setInterval(()=>{rotation+=10}, 20)
    let [rotation, rotateCog] = useState(0)
    // setInterval(()=>{rotateCog(rotation + 5)}, 200)
    const useStyles = makeStyles((theme)=>({
    leftcard: {
        margin: "40px 6vw 40px 6vw",
        width: "60vw",
        float: 'left',

    },
    rightcard: {
        margin: "40px 6vw 40px 6vw",
        width: "60vw",
        float: 'right',

    },
    text: {
        margin: "20px 20px",

    },

    leftcog:{
        position: 'absolute',
        top: '-38px',
        left: '-38px',
        zIndex: -1,
        translate: '20px 0px',
        animation: '$rotationa 8s infinite linear',
    },
    rightcog:{
        position: 'absolute',
        top: '-38px',
        right: '-38px',
        zIndex: -1,
        animation: '$rotationb 8s infinite linear',
    },
    '@keyframes rotationa' :{
        'from': {
          transform: 'rotate(0deg)'
        },
        'to': {
          transform: 'rotate(359deg)'
        }
      },
      '@keyframes rotationb' :{
        'from': {
          transform: 'rotate(359deg)'
        },
        'to': {
          transform: 'rotate(0deg)'
        }
      },
    }));
    const classes = useStyles();
    return (
        <div >
            <Paper style={{ backgroundColor: props.color, position: 'relative', height: '100%', width: '80s%'}} className={props.orient === 'left' ? classes.leftcard : classes.rightcard} elevation={3}>
                <Typography className={classes.text} variant="h2">{props.title}</Typography>
                <Typography className={classes.text} variant="body1">{props.children}</Typography>
                <img alt = "rotating gear around text cards" react-material-ui-carouselstyle = {{transform: `rotate(${rotation}deg)`}}className = {props.orient === 'left' ? classes.leftcog : classes.rightcog} src={cogwheel}/>
            </Paper>
        </div>
    )}