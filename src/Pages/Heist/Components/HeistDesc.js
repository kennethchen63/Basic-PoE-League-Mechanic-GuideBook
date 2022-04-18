import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Heist from "../../../images/Heist.png"

function HeistDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Heist
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Heist}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Heist league mechanic introduces the Rogue Harbour, Contracts, Rogue Markers and a complex Heist System.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    To begin Heist, you will first need to acquire Rogue Markers and contracts via Smuggler's Caches or dropped by monsters in maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Rogue Markers are the primary currency for Heist, you will need them to pay for Heist Rogues and to open a portal to the Rogue Harbour.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you have obtained a contract and rogue markers, you can travel to the Rogue Harbour and meet the Rogues there.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 9 different Rogues that you can hire to complete a contract, each with a specialization in different sets of skills.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Some Rogues are unlocked progressively, by leveling up other Rogues and completing their quests/contracts.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h2">
                    Rogues
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HeistDesc;