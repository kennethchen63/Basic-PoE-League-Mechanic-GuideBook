import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import SynRingTableDesc from "./Components/SynRingTableDesc";
import SynMapPicDesc from "./Components/SynMapPicDesc";
import SynLeagueDesc from "./Components/SynLeagueDesc";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: '100%', 
        backgroundColor: 'gray', 
    },
}));


function Synthesis() {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box className={classes.box}>
                    <div>
                        <SynLeagueDesc/>
                    </div>
                    <div>
                        <SynMapPicDesc/>
                    </div>
                    <div>
                        <SynRingTableDesc/>
                    </div>
                </Box>
            </Grid>
    </Grid>
    )
}

export default Synthesis;