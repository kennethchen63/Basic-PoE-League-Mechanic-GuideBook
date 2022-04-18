import React from "react";
import {ListItem, Typography } from '@mui/material'
import { Link } from "react-router-dom";


const LeagueListItemButton = ({name}) => {


    return (
        <div>
            <ListItem divider button component={Link} to={`/${name}`}>
                <Typography>
                    {name}
                </Typography>
            </ListItem>
        </div>
    )
}

export default LeagueListItemButton;