import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BloodlinesDesc from "./Components/BloodlinesDesc";
import BloodlineTable from "./Components/BloodlineTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Bloodlines() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <BloodlinesDesc/>
                            <BloodlineTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Bloodlines;