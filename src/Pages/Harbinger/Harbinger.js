import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import HarbDesc from "./Components/HarbDesc";
import HarbTable from "./Components/HarbTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
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