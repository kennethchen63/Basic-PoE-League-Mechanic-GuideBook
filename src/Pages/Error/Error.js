import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import ErrorDesc from "./Components/ErrorDesc";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));


function Error() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <ErrorDesc/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Error;