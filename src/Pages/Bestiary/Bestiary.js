import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import BestiaryDesc from "./Components/BestiaryDesc";
import BeastCrafting from "./Components/BeastCrafting";
import BeastTypes from "./Components/BeastTypes";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Bestiary() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <BestiaryDesc/>
                        </div>
                        <div>
                            <BeastTypes/>
                        </div>
                        <div>
                            <BeastCrafting/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Bestiary;