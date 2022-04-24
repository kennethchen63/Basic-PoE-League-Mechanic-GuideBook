import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import BreachDesc from "./Componets/BreachDesc";
import BreachTable from "./Componets/BreachTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Breach() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <BreachDesc/>
                        </div>
                        <div>
                            <BreachTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Breach;