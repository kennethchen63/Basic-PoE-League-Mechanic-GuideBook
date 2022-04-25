import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import DelDesc from "./Components/DelDesc";
import DeliRewards from "./Components/DelRewards";
import Simulacrum from "./Components/Simulacrum";

const useStyles = makeStyles(theme => ({
    box: {
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
                    <Box className={classes.box}>
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