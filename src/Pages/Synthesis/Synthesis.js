import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import SynRingTableDesc from "./Components/SynRingTableDesc";
import SynMapPicDesc from "./Components/SynMapPicDesc";
import SynLeagueDesc from "./Components/SynLeagueDesc";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                <Box className={classes.l_desc}>
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