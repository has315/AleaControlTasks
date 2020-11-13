import React from 'react';
import { withRouter } from "react-router";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';

type History ={
    history: any
}

//HOC component for navigation
const SideMenu = ({history: {push} }: History) =>
    <div>
        {[{url: "/home", label: "Home", icon: <HomeIcon/> },
         {url: "/UseFormatted", label: "UseFormatted", icon: <PersonIcon/> },
         {url: "/DragnDrop", label: "DragnDrop", icon: <PeopleIcon/> },
         {url: "/FormSubmission", label: "FormSubmission", icon: <PersonAddIcon/> }]
            .map(({url, label, icon}, key) =>
                        <ListItem button onClick={()=> push(url)} key={'side-menu-' + key}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>)}
    </div>;

export default withRouter(SideMenu);