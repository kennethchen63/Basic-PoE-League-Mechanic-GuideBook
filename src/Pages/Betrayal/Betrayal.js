import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BetrayalDesc from "./Components/BetrayalDesc";
import BoardDesc from "./Components/BoardDesc";
import SafehouseDesc from "./Components/SafehouseDesc";
import SafehouseTable from "./Components/SafehouseTable";
     
const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Betrayal() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <div>
                            <BetrayalDesc/>
                        </div>
                        <div>
                            <BoardDesc/>
                        </div>
                        <div>
                            <SafehouseDesc/>
                        </div>
                        <div>
                            <SafehouseTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Betrayal;