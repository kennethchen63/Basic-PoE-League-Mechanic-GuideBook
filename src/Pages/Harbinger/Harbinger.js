import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import HarbDesc from "./Components/HarbDesc";
import HarbTable from "./Components/HarbTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Harbinger() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <HarbDesc/>
                        </div>
                        <div>
                            <HarbTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Harbinger;