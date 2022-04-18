import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import React from "react";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

function Tribute() {

    const classes = useStyles();

    return (
        <Grid>
            <Grid container justifyContent="center">
                <Typography className={classes.bold} variant="h4">
                    Ritual's Tribute/Favour System
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    In the Favour/Tribute Interface, you are able to obtain items from the interface if you have enough tribute to do so.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If there are items that you do not have enough Tribute for, you may Defer them. 
                    If there are no items that you want, you can reroll the items generated at a cost of Tribute
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                 <Typography>
                    Deferring works where you can pay 15% of that item's Tribute cost to have it guaranteed to appear on the next zone that has Rituals at a 10% discounted price.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                 <Typography>
                   If you reroll items without deferring those items are lost forever unless you have previously deferred them before.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                 <Typography>
                   Deferring is best used when there is valuable items that you want but do not have the required Tribute currently. 
                   Additionally, you should save at least 2,000 - 3,000 Tribute for each reroll to have enough Tribute to refer most valuable items.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Tribute;