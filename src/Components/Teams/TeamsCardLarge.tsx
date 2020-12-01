import React, { Component } from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserComp from './UserComp';
import { Name, FakeUser} from './Members';
import TabBar from './TabBar'
import {Route, Router, useParams, Switch, useRouteMatch} from 'react-router-dom'
import TeamDisplay from './TeamDisplay';
import { Fade } from 'react-reveal'
export default function TeamsCardLarge() {
       const useStyles = makeStyles((theme)=>({
        root: {
            margin: '0px 20px'
        },
        title:{
            margin: '20px',
            padding: '20px'
        }
      }));
      const classes = useStyles();
      let { path, url } = useRouteMatch();
      console.log('path', path)
    return (
        <div className={classes.root}>
            <Fade down>
            <TabBar url={url}/>
            </Fade>
            <Switch/>
            <Route exact path={path}>
                Please select a route
            </Route>
            <Route path={`${path}/:teamId`}>
              <TeamDisplay/>
            </Route>
            <Switch/>   

        </div>
    )
}

