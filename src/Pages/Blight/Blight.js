import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BlightDesc from "./Components/BlightDesc";
import BlightTowers from "./Components/BlightTowers";
import BlightRewards from "./Components/BlightRewards";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Blight() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <BlightDesc/>
                        </div>
                        <div>
                            <BlightRewards/>
                        </div>
                        <div>
                            <BlightTowers/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Blight;