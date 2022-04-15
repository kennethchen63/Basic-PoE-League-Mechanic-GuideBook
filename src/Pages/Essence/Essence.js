import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import EssenceDesc from "./Components/EssenceDesc";
import EssenceTable from "./Components/EssenceTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
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
                    <Box className={classes.l_desc}>
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