import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import NemesisDesc from "./Components/NemesisDesc";
import NemesisTable from "./Components/NemesisTable";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Nemesis() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <NemesisDesc/>
                        </div>
                        <div>
                            <NemesisTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Nemesis;