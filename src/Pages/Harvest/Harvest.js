import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import HarvestDesc from "./Components/HarvestDesc";
import HarvestTable from "./Components/HarvestTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Harvest() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <HarvestDesc/>
                        </div>
                        <div>
                            <HarvestTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Harvest;