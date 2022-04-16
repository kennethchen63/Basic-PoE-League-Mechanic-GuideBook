import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BreachDesc from "./Componets/BreachDesc";
import BreachTable from "./Componets/BreachTable";
           
const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Breach() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <BreachDesc/>
                        </div>
                        <div>
                            <BreachTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Breach;