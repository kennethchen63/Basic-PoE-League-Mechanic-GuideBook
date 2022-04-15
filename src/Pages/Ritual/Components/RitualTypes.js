import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import RitualTypeTable from "./RitualTypeTable";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));



function RitualTypes() {

    const classes = useStyles();

    return(
        <Grid>
            <Grid container justifyContent="center">
                <Typography className={classes.bold} variant="h4">
                    Ritual Altar Types
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <RitualTypeTable/>
            </Grid>
        </Grid>
    )
}

export default RitualTypes;