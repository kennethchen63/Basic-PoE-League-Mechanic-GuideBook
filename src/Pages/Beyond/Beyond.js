import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import BeyondDesc from "./Components/BeyondDesc";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Beyond() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <BeyondDesc/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Beyond;