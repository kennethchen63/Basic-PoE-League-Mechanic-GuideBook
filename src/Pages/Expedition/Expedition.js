import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import ExpDesc from "./Components/ExpDesc";
import ExpNPCs from "./Components/ExpNPCs";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
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