import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, IconButton, Button, Grid, Typography, Container } from '@material-ui/core/';
import colors from '../Core/colors';
import { GitHub } from '@material-ui/icons';

export default function Footer() {
    const useStyles = makeStyles((theme)=>({
        root:{
            height: '200px',
            color: colors.white
        },
        footer:{
            backgroundColor: '#19364f',
            height: '75%'
        },
        subfoot:{
            backgroundColor: '#0e1f2e',
            height: '32%'
        },
        link:{
            color: colors.white
        }
    }))
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Grid className={classes.footer} container spacing={3}>
            </Grid>
            <Grid className={classes.subfoot} container>
                <div style={{display: 'inline-block', margin: 'auto'}}>
                <Button target='_blank' style={{color: colors.white}}href = 'https://github.com/JoeySorkin/MillburnRoboticsWebsite2020' endIcon={<GitHub/>} >Made By Joey Sorkin</Button>
                {' ©'} 2020
                </div>
            </Grid>
        </div>
    )
}
