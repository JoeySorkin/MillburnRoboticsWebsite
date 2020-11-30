/* 
This file dynamically adds link info
It is pared by other files, usually mapped out into components
*/
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GroupIcon from '@material-ui/icons/Group';
import BuildIcon from '@material-ui/icons/Build';
import React from 'react';
export interface Page {
    name:string,
    link:string,
}

export const PagesArr:Page[] = [{name: 'Home', link: ''},{name: 'Our Program', link: 'ourprogram'}, {name: 'Our Teams', link: 'teams'}, {name: 'VEX', link: 'vex' }, {name: 'Contact Us', link: 'contact'}]

