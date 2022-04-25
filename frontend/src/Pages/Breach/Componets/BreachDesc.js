import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import Breach from "../../../LeagueLogos/Breach.JPG";

function BreachDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Breach
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Breach}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Breach league mechanic introduces the Breach system that contains additional monsters and end game content.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    To begin Breach, there will be a clapsed hand that you will need to walk over to activate it. Once activated, it will expand in a circle around for a couple seconds with monsters spawning in.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    In addition to monsters, there will be other clickable clapsed hands that drop breach splinters when interacted with. Killing breach monsters inside the breach encounter increase the duration.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Breaches have a base time of 30 seconds and increase up to 60 seconds as you kill more breach monsters. These monsters have a chance to drop breach splinters and Breach Rings.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Breach Rings are unique in a way that they are corrupted and cannot be modified. However, their modifiers are doubled while in a breach. These rings are only used to vendor for a Grasping Mail.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Grasping Mails are only obtained by vendoring an inventory full of breach rings (60). Grasping Mails are a unique type of body armour, where they roll unique Breach modifiers. 
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BreachDesc;