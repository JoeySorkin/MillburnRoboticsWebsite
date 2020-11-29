/* 
This file dynamically adds link info
It is pared by other files, usually mapped out into components
*/
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GroupIcon from '@material-ui/icons/Group';
import BuildIcon from '@material-ui/icons/Build';
export interface Page {
    name:string,
    link?:string,
    icon: any 
}
export const PagesArr:Page[] = [{name: 'Our Teams', icon: GroupIcon, },{name: 'Our Program', icon: InfoIcon }, {name: 'VEX', icon: BuildIcon }, {name: 'Contact Us', icon: ContactMailIcon}]

