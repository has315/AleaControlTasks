import React, { FunctionComponent, ReactComponentElement } from 'react';
import { withRouter } from "react-router";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

type History ={
    history: any
}



const SideMenu = ({history: {push} }: History) =>
    <div>
        {[{url: "/home", label: "Home", icon: <HomeIcon/> },
         {url: "/UseFormatted", label: "UseFormatted", icon: <InfoIcon/> },
         {url: "/DragnDrop", label: "DragnDrop", icon: <InfoIcon/> },
         {url: "/FormSubmission", label: "FormSubmission", icon: <InfoIcon/> }]
            .map(({url, label, icon}, key) =>
                        <ListItem button onClick={()=> push(url)} key={'side-menu-' + key}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>)}
    </div>;

export default withRouter(SideMenu);