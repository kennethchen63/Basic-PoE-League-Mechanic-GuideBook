import React from "react";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import Syn from "../images/Synthesis.webp"

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: 950, 
        backgroundColor: 'gray', 
    },
}));


function Synthesis() {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
            <Box className={classes.l_desc}>
                    <Typography align="center" variant="h2">
                        Synthesis
                    </Typography>
                    <Grid container alignItems="center" justifyContent="center">
                        <Box component="img" src={`${Syn}`} align="center"/>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                            The Synthesis league mechanics introduces new unique maps that have randomized map modifiers.
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                            There are a total of 5 unique synthesized maps each with their unique Synthesis boss.
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                           Monsters in these synthesized maps have a chance to drop synthesized items (implicits are randomized).
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
    </Grid>
    )
}

export default Synthesis;