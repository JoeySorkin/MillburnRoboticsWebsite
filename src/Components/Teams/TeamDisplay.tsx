import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserComp from './UserComp';
import { FakeUser, Team } from './Members';
import { useParams } from 'react-router-dom';
import { TeamInfo } from './Members'
import { useState } from 'react';
export default function TeamDisplay() {
    const useStyles = makeStyles((theme)=>({

        title:{
            margin: '20px',
            padding: '20px'
        },
        userbox:{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            listStyle: 'none',
        }
      }));
      let {teamId} = useParams()
      const classes = useStyles()
      const team: any  = TeamInfo.get(teamId);
    return (
        <div>
            <Paper elevation={3}>
                 <Typography className={classes.title} variant='h2'>{team.name} </Typography>
                 <Typography className={classes.title} variant='body1'>{team.description}</Typography>
            </Paper>
            <div className={classes.userbox}>
            {team.members.map((elem)=>(
                <UserComp User={elem}></UserComp> 
            ))}
            </div>
        </div>
    )
}
