import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import DelDesc from "./Components/DelDesc";
import DeliRewards from "./Components/DelRewards";
import Simulacrum from "./Components/Simulacrum";
 
const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Delirium() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <DelDesc/>
                        </div>
                        <div>
                            <DeliRewards/>
                        </div>
                        <div>
                            <Simulacrum/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Delirium;