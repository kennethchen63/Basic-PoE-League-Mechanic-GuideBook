import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BeyondDesc from "./Components/BeyondDesc";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
                        <BeyondDesc/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Beyond;