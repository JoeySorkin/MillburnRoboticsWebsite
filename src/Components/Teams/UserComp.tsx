import React from 'react'
import {Avatar, Box, Card, Typography, Chip, Paper} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Name, User } from './Members';

interface UserProps{
    User: User
}
export default function UserComp(props: UserProps ) {
    const person = props.User
    const handleClick = ()=> {

    }
    const useStyles = makeStyles((theme) => ({
      chip: {
        margin: theme.spacing(0.5),
      },
      root:{
        width: '300px',
        margin: '5px',
        padding: '10px'
      },
        card: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5px',
        padding: '0px'
      },
        cardHeader:{
          margin: '0px 10px',
          display: 'flex',
          width: '275px',
          justifyContent: 'flex-start',
          alignItems: 'center'
        },
        cardBody:{
          margin: '0px 10px',
          display: 'flex',
          justifyContent: 'left',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: theme.spacing(0.5),
        }

      }));
      const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Coder' },
        { key: 1, label: '7405K' },
        { key: 2, label: '7405X' },
      ]);
      const classes = useStyles();
    return (
        <Card elevation = {5} className={classes.root}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
            <Avatar style={{margin: '5px'}} alt = {person.name.first +' '+ person.name.last} src={person.photo}/>
             <Typography align='center' style={{width:'50%'}} variant='h6'>{person.name.first +' '+ person.name.last}</Typography>
            </div>
            <div className={classes.cardBody}>
                {chipData.map((data) => {
                let icon;

                return (
                  <li key={data.key}>
                    <Chip

                      label={data.label}
                      className={classes.chip}
                    />
                  </li>
                );
              })}

            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada urna vel orci sollicitudin dapibus. Proin congue sodales est, viverra tincidunt sapien accumsan a. Donec eu arcu at dui finibus tristique. Nunc quis leo eu justo imperdiet viverra. Vestibulum dignissim elit in lacus suscipit laoreet. Suspendisse potenti. Curabitur vel lacus sodales, ultrices urna a, vestibulum massa</Typography>
            </div>
          </div>
        
        </Card>


    )
}
