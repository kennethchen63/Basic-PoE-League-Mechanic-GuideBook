import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import RitualDesc from "./Components/RitualDesc";
import RitualImagesCap from "./Components/RitualImagesCap";
import Tribute from "./Components/Tribute";
import RitualTypes from "./Components/RitualTypes";


const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Ritual() {

    const classes = useStyles();

    return (
        <div>         
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <RitualDesc/>
                        </div>
                        <div>
                            <RitualImagesCap/>
                        </div>
                        <div>
                            <Tribute/>
                        </div>
                        <div>
                            <RitualTypes/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Ritual;