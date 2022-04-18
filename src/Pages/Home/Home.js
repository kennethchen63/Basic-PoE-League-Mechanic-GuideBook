import React from "react";
import { Box, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import HomeDesc from "./Components/HomeDesc";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Home() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <HomeDesc/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;