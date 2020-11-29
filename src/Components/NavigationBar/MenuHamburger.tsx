// import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {SwipeableDrawer ,Button, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core'
//Pages interface 
import colors from '../Core/colors'
import { PagesArr, Page } from './Pages';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listitem:{
    height: '80%',
    padding: '20px',
    '&:hover': {
      background: "#26547cf0",
      color: colors.white,
      transition: "1s"
    }
  }
});

export default function SwipeableTemporaryDrawer() {
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

          <ListItem button className ={classes.listitem}>
            <ListItemIcon><GroupIcon/></ListItemIcon>
            <ListItemText primary={'Our Teams'} />
          </ListItem>
          <ListItem button className ={classes.listitem}>
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText primary={'Our Program'} />
          </ListItem>
          <ListItem button className ={classes.listitem}>
            <ListItemIcon><BuildIcon/></ListItemIcon>
            <ListItemText primary={'VEX'} />
          </ListItem>
          <ListItem button className ={classes.listitem}>
            <ListItemIcon><ContactMailIcon/></ListItemIcon>
            <ListItemText primary={'Contact Us'} />
          </ListItem>
      
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