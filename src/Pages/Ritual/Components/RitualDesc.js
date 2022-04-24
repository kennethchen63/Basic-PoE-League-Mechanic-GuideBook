import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Ritual from "../../../LeagueLogos/Ritual.JPG"

function RitualDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Ritual
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Ritual}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Ritual league mechanic introduces Rituals Altars that appear 3-4 times in maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These altars, when interacted with, resurrect nearby monsters that have died and limit you to a small arena around the atlar until you die or all monsters are killed.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Killing monsters in these rituals produce Tribute that can be used afterwards to barter for various different items.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    In each subsequent altar interacted with, it also resurrects previous monsters that were killed and producing additional Tribute.
                </Typography>
            </Grid>
        </Grid>
    )

}

export default RitualDesc;