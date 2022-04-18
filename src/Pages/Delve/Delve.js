import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import DelveDesc from "./Components/DelveDesc";
import BiomeTable from "./Components/BiomeTable";
import FossilTable from "./Components/FossilTable";
import ResonatorTable from "./Components/ResonatorTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Delve() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <DelveDesc/>
                        </div>
                        <div>
                            <FossilTable/>
                        </div>
                        <div>
                            <ResonatorTable/>
                        </div>
                        <div>
                            <BiomeTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Delve;