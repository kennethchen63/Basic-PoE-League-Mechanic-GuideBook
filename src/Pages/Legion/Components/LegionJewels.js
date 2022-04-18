import React from "react";
import { Grid, Typography } from "@mui/material";

function LegionJewels() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Legion Jewels
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Generals killed inside the Domain of Timeless Conflict have a chance to drop a Unique Legion Jewel specific to their Fraction.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These jewels are sought after for many different builds and are usually worth a decent amount of currency.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Additionally, each of these jewels convert any keystone in a large radius on the tree to a unique keystone of their leader and fraction. (There are 3 leaders for each fraction)
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The number and leader in the modifiers of these jewels can both be modified with a Divine Orb, to change the unique keystone and the modifiers the jewel changes on the passive tree.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table of each Legion Jewel and their modifiers. Note: Only ONE of these jewels can be used in your build
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LegionJewels;