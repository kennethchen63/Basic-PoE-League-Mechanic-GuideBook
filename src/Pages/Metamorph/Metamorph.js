import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import MetaDesc from "./Components/MetaDesc";
import CatalystTable from "./Components/CataylstTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Metamorph() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <MetaDesc/>
                        </div>
                        <div>
                            <CatalystTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Metamorph;