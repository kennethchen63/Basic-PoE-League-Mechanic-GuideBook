import React from "react";
import {ListItem, Typography } from '@material-ui/core'


const LeagueListItemButton = ({name}) => {


    return (
        <div>
            <ListItem divider button onClick={() => console.log("clicked")}>
                <Typography>
                    {name}
                </Typography>
            </ListItem>
        </div>
    )
}

export default LeagueListItemButton;