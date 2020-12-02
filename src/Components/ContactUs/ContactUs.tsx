import React from 'react'
import { Typography, Paper,Grid, TextField, Button, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import colors from '../Core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Fade from 'react-reveal/Fade';

export default function ContactUs() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        formbox: {flex: '1 0 auto', width: '95%'},
        socialbtn:{margin: '10px'},
        paper: {margin: '30px 5%', padding: '20px', backgroundColor: colors.blue, color: colors.white},
        papercell: {margin: '30px 5%', padding: '20px', flexWrap: 'nowrap', },
        textfield: {margin: '20px 5px', width: '95%'},
        button: {backgroundColor: colors.blue, color: colors.white,
            "&:hover": {
                backgroundColor: colors.blue
              }}
        
      }));
    const classes = useStyles()
    return (
        <Fade>
            <Typography align='center'variant='h1'>Contact Us</Typography>
            <Paper elevation ={4} className={classes.paper}>
            <Container className={classes.root}>
               <div className={classes.formbox}>
                <Paper className={classes.papercell}>
                    
                    <Typography  align='center' variant='h5'>Send us a Message!</Typography>
                    <TextField className={classes.textfield} id="filled-basic" label="Your Name" variant="filled" />
                    <br/>
                    <TextField className={classes.textfield} id="filled-basic" label="Your Email" variant="filled" />
                    <br/>
                    <TextField multiline className={classes.textfield} id="filled-basic" label="Message" variant="filled" />
                    <Button endIcon={<SendIcon/>} size="large" className={classes.button}>Send</Button>
                </Paper>
                </div>
                <div className={classes.formbox} style={{flex:1}}>
                <Paper className={classes.papercell} style={{justifyContent: 'center'}}>
                    <Typography  align='center' variant='h5'>Social Links</Typography>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                    {/* <Button variant='outlined' size="large" style={{color: colors.white, background: colors.blue}} className={classes.socialbtn} startIcon={<FacebookIcon/>}>Facebook</Button>
                    <br/> */}
                    <Button target='_blank' href="https://www.instagram.com/7405_millburnrobotics/?hl=en" variant='outlined' size="large" style={{color: colors.white, background: colors.pink}}className={classes.socialbtn} startIcon={<InstagramIcon/>} >Instagram</Button>
                    <br/>
                    <Button target='_blank' href="mailto:" variant='outlined' size="large" style={{ background: colors.orange}} className={classes.socialbtn} startIcon={<MailIcon/>}>Email</Button>
                    <br/>
                    <Button target='_blank' href="https://github.com/Millburn-Robotics" variant='outlined' size="large"  className={classes.socialbtn} startIcon={<GitHubIcon/>}>Github</Button>
                    <br/>
                    
                    <br/>
                    <br/>
                    <br/>
                    <Button target='_blank' href="https://github.com/JoeySorkin/MillburnRoboticsWebsite2020" startIcon={<GitHubIcon/>}>How the site was made</Button>
                    </div>
                </Paper>
                </div>
            </Container>
            </Paper>
        </Fade>
    )
}
