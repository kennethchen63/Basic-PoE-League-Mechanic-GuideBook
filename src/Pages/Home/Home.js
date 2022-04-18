import React from "react";
import { Box, Grid } from '@material-ui/core';
import HomeDesc from "./Components/HomeDesc";

function Home() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box>
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