import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../Core/colors';
import Card from './Card';
export default function SubHero() {

    const useStyles = makeStyles((theme)=>({
    leftcard: {
        margin: "20px 50px",
        width: "60vw",
        float: 'left',
        
    },
    rightcard: {
        margin: "20px 50px",
        width: "60vw",
        float: 'right',
        
    },
    lefttext: {
        margin: "20px 50px"
    },
    righttext: {
        margin: "20px 50px",
        textAlign: 'right'
    }
    }));
    const classes = useStyles();
    return (
        <div>
            <Card title="Create" orient = "left" color={colors.green}>Body Text</Card>
            <Card  title="Design" orient = "right" color={colors.green}>Body Text</Card>
            <Card  title="Innovate" orient = "left" color={colors.green}>Body Text</Card>
        </div>
    )
}
