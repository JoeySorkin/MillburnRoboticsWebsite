// import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import {SwipeableDrawer ,Button, List, ListItem, ListItemIcon, ListItemText, Divider, CssBaseline} from '@material-ui/core'
//Pages interface 
import colors from '../Core/colors'
import { PagesArr, Page } from './Pages';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import {useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listitem:{
    height: '20%',
    padding: '20px',
    '&:hover': {
      background: "#26547cf0",
      color: colors.white,
      transition: "1s"
    }
  }
});

export default function SwipeableTemporaryDrawer() {
  const history = useHistory();
  const handleOnClick = useCallback((link) => history.push(`${link}/`), [history]);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const iconReturn = (name:string )=>{
    if (name === 'Our Program') return <InfoIcon/>
    if (name === 'Our Teams') return <GroupIcon/>
    if (name === 'VEX') return <BuildIcon/>
    if (name === 'Contact Us') return <MailIcon/>
    if (name === 'Home') return <HomeIcon/>
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{height: '100%'}}>
      {PagesArr.map(({name: text, link: link}, index)=>(
        <ListItem key={ index } onClick={()=>{handleOnClick(link)}}button className ={classes.listitem}>
           <ListItemIcon>{iconReturn(text)}</ListItemIcon>
           <ListItemText primary={text} />
        </ListItem>
      ))}

        {/* <div style={{bottom: 0, position:'relative'}}>
        <Divider/>
        <ListItem button className ={classes.listitem}>
            <ListItemIcon><ContactMailIcon/></ListItemIcon>
            <ListItemText primary={'Contact Us'} />
        </ListItem>
        </div> */}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
              <MenuIcon style={{fontSize: 40, color: "white"}}/>
            </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}