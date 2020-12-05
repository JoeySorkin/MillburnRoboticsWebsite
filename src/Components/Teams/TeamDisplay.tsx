import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserComp from './UserComp';
import { useParams } from 'react-router-dom';
import { TeamInfo } from './Profiles/Profiles'
import { Fade } from 'react-reveal'
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
            <Fade up>
            <Paper elevation={3}>
                 <Typography className={classes.title} variant='h2'>{team.name} </Typography>
                 <Typography className={classes.title} variant='body1'>{team.description}</Typography>
            </Paper>
            </Fade>
            <div className={classes.userbox}>
            {team.captains.map((elem)=>(
                <UserComp captain User={elem}></UserComp> 
            ))}
            {team.members.map((elem)=>(
                <UserComp captain={false} User={elem}></UserComp> 
            ))}
            </div>
        
        </div>
    )
}
