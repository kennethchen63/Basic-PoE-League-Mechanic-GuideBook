import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import RitualDesc from "./Components/RitualDesc";
import RitualImagesCap from "./Components/RitualImagesCap";
import Tribute from "./Components/Tribute";
import RitualTypes from "./Components/RitualTypes";


const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
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