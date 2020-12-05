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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card>
            <Card  title="Create" orient = "right" color={colors.orange}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card>
            <Card  title="Innovate" orient = "left" color={colors.orange}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card>
        </div>
    )
}
