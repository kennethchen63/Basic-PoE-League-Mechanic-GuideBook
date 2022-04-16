import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Syn from "../../../images/Synthesis.webp"

function SynLeagueDesc() {
    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Synthesis
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Syn}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Synthesis league mechanic introduces new unique maps that have randomized map modifiers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 5 unique synthesized maps each with their unique Synthesis boss.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                Monsters in these synthesized maps have a chance to drop synthesized items (implicits are randomized).
                </Typography>
            </Grid>
        </Grid>
    )
}

export default SynLeagueDesc;