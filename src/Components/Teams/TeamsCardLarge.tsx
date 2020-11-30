import React, { Component } from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserComp from './UserComp';
import { Name, FakeUser} from './Members';
export default function TeamsCardLarge() {
       const useStyles = makeStyles((theme)=>({
        root: {
            margin: '20px'
        },
        title:{
            margin: '20px',
            padding: '20px'
        }
      }));
      const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                 <Typography className={classes.title} variant='h2'>Team 7405K</Typography>
                 <Typography className={classes.title} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                 <UserComp User={FakeUser}></UserComp>           
            </Paper>
        </div>
    )
}

