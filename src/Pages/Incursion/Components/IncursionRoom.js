import React from "react";
import { Grid, Typography } from "@material-ui/core";


function IncursionRoom() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Incursion Rooms
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    There are 2 different types of rooms, tiered and untiered rooms. Tiered rooms are upgradable, while untiered rooms only have the option to change into 1 of 2 different rooms.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 24 different tiered rooms and their architects associated with each one. Untiered rooms randomly choose 2 tiered rooms that can be upgraded into.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Each tiered room has a total of 3 tiers, starting from t1 unless you have allocated Incursion Atlas Passive Tree Points.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default IncursionRoom;