/* 
This file dynamically adds link info
It is pared by other files, usually mapped out into components
*/
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
export interface Page {
    name:string,
    link?:string,
    icon: any 
}
export const PagesArr:Page[] = [{name: 'Our Teams', icon: InfoIcon, },{name: 'Our Program', icon: InfoIcon }, {name: 'VEX', icon: InfoIcon }, {name: 'Contact Us', icon: ContactMailIcon}]

