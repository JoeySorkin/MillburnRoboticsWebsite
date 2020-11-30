import React from 'react'
import { Card, Paper, Typography, CardActionArea, CardMedia, CardContent, CardActions,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../Core/colors';
interface TeamCardProps{
    name:string
    children:string
    color:string
}
export default function TeamsCard(props:TeamCardProps) {
    const useStyles = makeStyles((theme)=>({
        wrapper: {
            height: '100%',
            backgroundColor: colors.green,

        },
        title:{
            fontSize: '35px'
        },
          root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
      }));
      const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="./placeholder.png"
            title="Contemplative Reptile"
          />
          <CardContent style={{backgroundColor: props.color}}>
            <Typography gutterBottom variant="h5" component="h2">
              Team {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.children} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Aliquam purus sit amet luctus venenatis lectus. Ut sem nulla pharetra diam sit. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{backgroundColor: props.color}}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}
{/* <Paper>
<Typography align='center' variant='h1' className={classes.title}>{props.name}</Typography>
</Paper> */}