import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import ExpDesc from "./Components/ExpDesc";
import ExpNPCs from "./Components/ExpNPCs";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Expedition() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <ExpDesc/>
                        </div>
                        <div>
                            <ExpNPCs/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Expedition;