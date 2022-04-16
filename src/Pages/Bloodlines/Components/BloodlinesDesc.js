import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function BloodlinesDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Bloodlines
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    The Bloodlines league mechanic introduces new modifiers to magic monster packs shown in purple.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Bloodline monster packs are only found in maps with the "Magic Monster Packs each have a Bloodline Mod" modifiers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Bloodline monster packs causes the monsters to have bonus modifiers and increase their difficulty.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table of all possible Bloodline Modifiers.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BloodlinesDesc;