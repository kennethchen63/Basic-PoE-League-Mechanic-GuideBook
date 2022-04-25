import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import LegionDesc from "./Components/LegionDesc";
import LegionTable from "./Components/LegionTable";
import Timeless from "./Components/Timeless"
import LegionJewelsTable from "./Components/LegionJewelsTable";
import LegionJewels from "./Components/LegionJewels";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%",
        backgroundColor: 'gray', 
    },
}));

function Legion() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <LegionDesc/>
                        </div>
                        <div>
                            <LegionTable/>
                        </div>
                        <div>
                            <Timeless/>
                        </div>
                        <div>
                            <LegionJewels/>
                        </div>
                        <div>
                            <LegionJewelsTable/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Legion;