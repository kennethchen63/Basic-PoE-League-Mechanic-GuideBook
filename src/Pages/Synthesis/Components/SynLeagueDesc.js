import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Syn from "../../../images/Synthesis.webp"

function LeagueDesc() {
    return (
        <Grid>
            <Typography align="center" variant="h2">
                Synthesis
            </Typography>
            <Grid container alignItems="center" justifyContent="center">
                <Box component="img" src={`${Syn}`} align="center"/>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                    The Synthesis league mechanics introduces new unique maps that have randomized map modifiers.
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                    There are a total of 5 unique synthesized maps each with their unique Synthesis boss.
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                Monsters in these synthesized maps have a chance to drop synthesized items (implicits are randomized).
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LeagueDesc;