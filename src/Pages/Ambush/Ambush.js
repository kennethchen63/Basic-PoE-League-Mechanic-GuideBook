import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import AmbushDesc from "./Components/AmbushDesc";
import AmbushTable from "./Components/AmbushTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Ambush() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <AmbushDesc/>
                        </div>
                        <div>
                            <AmbushTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Ambush;