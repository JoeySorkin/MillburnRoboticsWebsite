
import React from 'react'
import {useState, useEffect} from 'react'
import{Hidden, AppBar, Toolbar, useMediaQuery, Fade} from '@material-ui/core/'
import {createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import NavElem from "./NavElem"
import Logo from "./Logo"
// import MenuBar from './MenuBar'
import MenuHamburger from './MenuHamburger';
import { PagesArr, Page } from './Pages';
import colors from '../Core/colors'
const NavBar = () => {
    return(

        <AppBar color="primary" > {/*The AppBar components provides an outer shell for the Navbar. It also has a cool shadow */}
            <Toolbar style={{margin: "0px 40px 0px 0px"}}>
                <Hidden mdUp>{/* ONCE THE NAVLINKS DISAPPEAR, THE HAMBURGER APPEARS */}
                <MenuHamburger/>
                
                </Hidden>
                <Logo/>

                <Hidden smDown> 
                    {PagesArr.map(e=>(
                        <NavElem>{e.name}</NavElem>
                    ))}
                </Hidden>
            </Toolbar>    
        </AppBar>


    )
}
export default NavBar;

//Archived code

/*
        <Toolbar>
        <Hidden style = {{width: 10}} only={['md', 'lg', 'xl', 'sm']}>
        menu
        </Hidden>


                <Typography style={LogoStyle} variant="h2">Millburn Robotics</Typography>


                <Hidden only='xs'>
              <NavElem>About</NavElem>
              <NavElem>ABOUT</NavElem>
              <NavElem>ABOUT</NavElem>
              <NavElem>ABOUT</NavElem>
              
              <div style={{padding:10}}></div>
              </Hidden>
                <Hidden only={['md', 'lg' ,'sm' ,'xl']}>
                <Grid style={{padding: "10px 25px"}} item xs={8}></Grid>
                </Hidden>

        </Toolbar>





*/