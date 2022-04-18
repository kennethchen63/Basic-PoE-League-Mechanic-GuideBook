import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import EssenceDesc from "./Components/EssenceDesc";
import EssenceTable from "./Components/EssenceTable";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Essence() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <EssenceDesc/>
                        </div>
                        <div>
                            <EssenceTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Essence;