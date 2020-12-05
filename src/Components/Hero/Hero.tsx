import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Particles from 'react-particles-js';
import colors from '../Core/colors';
import logo from './logobw.png'
export default function Hero() {
    const useStyles = makeStyles((theme)=>({
        wrapper:{ 
            margin: "-10px 0px 0px 0px",
            width: "100vw",
            height: "101vh",
            // background: "url(" + placeholder + ") no-repeat center center",
            backgroundColor: colors.blue,
            overflow: 'hidden'
        },
        heroimage:{

        },
        centerdiv:{
            justifyContent: 'center',
            top: '40%',
            margin: "0px auto",
            position: "absolute",
            width: '100%'

        },
        centertext:{
            overflow: 'hidden',
            height: '100%',
            width: "100%",
            fontSize: "450%",
            lineHeight: "100px",
            color: colors.white,
            fontFamily: 'Fira Code',
        }
    }));
    const classes = useStyles();
    return (
        <div className = {classes.wrapper} style={{overflowX: 'hidden'}}>
            <Particles 
                style={{
                    height: '100vh',
                    position: 'absolute'
                }}
                params={{ 
                particles: { 
                    number: { 
                    value: 200, 
                    density: { 
                        enable: true, 
                        value_area: 1000, 
                    } 
                    }, 
                    "color": {
                        "value": colors.blue
                    },
                }, 
                }} 
                /> 
            <div className = {classes.centerdiv}>
                {/* <Typography variant = "h5" align="center" className = {classes.centertext}>
                Millburn <br/> Robotics
                </Typography> */}
                <img alt="Millburn Robotics" style={{display: 'block', margin: '-20px auto', maxWidth: '100vw'}} src={logo}/>
            </div>
            
        </div>
    )
}
