import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import HarvestDesc from "./Components/HarvestDesc";
import HarvestTable from "./Components/HarvestTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
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