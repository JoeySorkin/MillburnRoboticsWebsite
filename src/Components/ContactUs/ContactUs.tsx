import React from 'react'
import { Snackbar, Typography, Paper, TextField, Button, Container } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import colors from '../Core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
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
    
    const validateEmail = (email: string):boolean => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase()) || (email==='');
    }
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValidity, setEmailValidity] = useState(false)
    const [snackbarTrue, setSnackbarTrue] = useState(false)
  const [open, setOpen] = React.useState(false);

    const handleClick = (bool:boolean):void => {
        setSnackbarTrue(bool)
        setOpen(true);
    };
    const clearFields = ():void =>{
        setName('');
        setEmail('');
        setMessage('');
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSnackbarTrue(true)
        setOpen(false);
    };
    const sendForm = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://formtest.requestcatcher.com/test', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(`name=${name}&email=${email}&message=${message}`);
    
    }

    const submitForm = () => {
        if(validMessage()){
            sendForm();
            clearFields();
            handleClick(true);
        } else {
            handleClick(false);
        }
        
    }
    const validMessage = ():boolean =>{
        return name !== '' && message !== '' && emailValidity && email !== ''
    }
    useEffect(()=>{
    setEmailValidity(validateEmail(email));
    }, [email])
    return (
        <Fade>
            <Typography align='center'variant='h1'>Contact Us</Typography>
            <Paper elevation ={4} className={classes.paper}>
            <Container className={classes.root}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity= {snackbarTrue ? "success" : "error"}>
                {snackbarTrue ?"Your message has been sent!" : "Please fill out all of the fields"}
                </Alert>
            </Snackbar>
               <div className={classes.formbox}>
                <Paper className={classes.papercell}>
                    
                    <Typography  align='center' variant='h5'>Send us a Message!</Typography>
                    <TextField value={name} className={classes.textfield} id="filled-basic" label="Your Name" variant="filled" 
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <br/>
                    <TextField value={email} className={classes.textfield} id="filled-basic" label="Your Email" variant="filled"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        error={!emailValidity}
                        helperText = {!emailValidity ? 'Please enter a valid email ': null}
                     />
                    <br/>
                    <TextField  value={message} multiline className={classes.textfield} id="filled-basic" label="Message" variant="filled" 
                    onChange={(e)=>{setMessage(e.target.value)}}/>
                    <Button onClick={submitForm} endIcon={<SendIcon/>} size="large" className={classes.button}>Send</Button>
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
                    <Button target='_blank' href="mailto:millburn7405k@gmail.com" variant='outlined' size="large" style={{ background: colors.orange}} className={classes.socialbtn} startIcon={<MailIcon/>}>Email</Button>
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
