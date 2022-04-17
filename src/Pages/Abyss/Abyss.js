import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import AbyssDesc from "./Components/AbyssDesc";
import AbyssItems from "./Components/AbyssItems";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Abyss() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <AbyssDesc/>
                        </div>
                        <div>
                            <AbyssItems/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Abyss;