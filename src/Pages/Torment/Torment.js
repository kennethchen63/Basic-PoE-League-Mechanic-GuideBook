import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import TormentTable from "./Components/TormentTable";
import TormentDescPic from "./Components/TormentDesc";

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));


function Torment() {

    const classes = useStyles();

    return (   
        <Grid container>
            <Grid container xs={12}>
                <Box className={classes.l_desc}>
                    <div>
                        <TormentDescPic/>
                    </div>
                    <div>
                        <TormentTable/>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Torment;