import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import Safehouse from "../Images/Safehouse.webp";

function SafehouseDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Syndicate Safehouses
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Safehouse}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you have obtained 100 intelligence for a division you have the option to raid the Safehouse for that division. The Safehouse level will be the same as the highest Syndicate zone you have encountered for that division.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Safehouses contain rewards based on the member's rank and division. The leader of these safehouses gets their reward's doubled. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                     Raiding a safehouse opens portals to that division's location, where you will be able to defeat the division members and interrogate the leader to gain intelligence for Catarina. Their rewards are also located at the back, where there are rooms for each member.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Interrogating the leader puts them in prison and another member will take its place. It also lowers the rank of all members by 1. These leaders also have a chance to drop Unique Betrayal Items.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default SafehouseDesc;