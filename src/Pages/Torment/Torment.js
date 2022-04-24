import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles/';
import TormentTable from "./Components/TormentTable";
import TormentDescPic from "./Components/TormentDesc";

const useStyles = makeStyles(theme => ({
    box: {
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
                <Box className={classes.box}>
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