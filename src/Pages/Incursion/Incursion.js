import React from "react";
import { Grid, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import IncursionDesc from "./Components/IncursionDesc";
import IncursionRoom from "./Components/IncursionRoom";
import IncursionTable from "./Components/IncursionTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Incursion() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <IncursionDesc/>
                        </div>
                        <div>
                            <IncursionRoom/>
                        </div>
                        <div>
                            <IncursionTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Incursion;