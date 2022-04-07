import React from "react";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: 950, 
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
                        <Typography align="center" variant="h2">
                            Beyond
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Beyond;