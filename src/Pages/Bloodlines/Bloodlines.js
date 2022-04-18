import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import BloodlinesDesc from "./Components/BloodlinesDesc";
import BloodlineTable from "./Components/BloodlineTable";

const useStyles = makeStyles(theme => ({
    box: {
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
                    <Box className={classes.box}>
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