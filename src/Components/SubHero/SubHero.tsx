import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import colors from '../Core/colors';
import Card from './Card';

export default function SubHero() {

    const useStyles = makeStyles((theme)=>({
    maindiv:{
        // backgroundImage: `url(${imagefill})`,
        height: '100%',
        width: '100%',
        display: 'inline-block',
        zIndex: -2
    }
    }));
    const classes = useStyles();
    return (
        <div className={classes.maindiv} style={{overflowX: 'hidden'}}>
            <Card title="Design" orient = "left" color={colors.orange}>
            At Millburn Robotics, we strive for perfection when it comes to designing outstanding robots to compete in competitions. We strongly emphasize the importance of planning out aspects of the robots in order to have a smooth building period. Design dictates the efficiency as well as ability of the robot in terms of each season’s challenge. It is the first step to creating a robot, and therefore the most important one when it comes to robotics.
            </Card>
            <Card  title="Create" orient = "right" color={colors.orange}>
            Creativity is a characteristic that is more important than ever. In order to adapt to the current restrictions due to the pandemic, we have had to come up with various systems to ensure safety and still maintain an enjoyable season for everyone. At Millburn Robotics, creativity fuels the unique designs and encourages outside of the box thinking that leads to the creation of our competition ready robots each year.
            </Card>
            <Card  title="Innovate" orient = "left" color={colors.orange}>
            Innovation is the development and application of ideas that improve the method in which challenges are completed. We believe that innovation is one of the crucial aspects at Millburn Robotics. Throughout the season, students exceed expectations and all participate in the creation of flawless, groundbreaking robots.
            </Card>
        </div>
    )
}
