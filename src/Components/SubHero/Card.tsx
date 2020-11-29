import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../Core/colors';
import cogwheel from './cog.svg'
import { transform } from 'typescript';
import { useEffect, useState } from 'react';
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
        margin: "40px 3vw 40px 3vw",
        width: "60vw",
        float: 'left',
    },
    rightcard: {
        margin: "40px 3vw 40px 3vw",
        width: "60vw",
        float: 'right',
    },
    text: {
        margin: "20px 20px"
    },

    leftcog:{
        position: 'relative',
        bottom: '195px',
        zIndex: -1,
        translate: '20px 0px',
        animation: '$rotation 8s infinite linear',
    },
    rightcog:{
        position: 'relative',
        bottom: '195px',
        zIndex: -1,
        animation: '$rotation 8s infinite linear',
    },
    '@keyframes rotation' :{
        'from': {
          transform: 'rotate(0deg)'
        },
        'to': {
          transform: 'rotate(359deg)'
        }
      },
    }));
    const classes = useStyles();
    return (
        <div>
            
            <Paper className={props.orient === 'left' ? classes.leftcard : classes.rightcard} style = {{backgroundColor: props.color, }}  elevation={3}>
                <Typography className={classes.text} variant="h2">{props.title}</Typography>
                <Typography className={classes.text} variant="body1">{props.children}</Typography>
                <img style = {{transform: `rotate(${rotation}deg)`}}className = {props.orient === 'left' ? classes.leftcog : classes.rightcog} src={cogwheel}/>
            </Paper>
        </div>
    )
}
