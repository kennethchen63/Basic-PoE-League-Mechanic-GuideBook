import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import RitualAltar from "../Images/RitualAltar.webp";
import FavourInterface from "../Images/FavourInterface.webp"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function RitualImagesCap() {

    return(
        <Grid container justifyContent="space-around" >
            <Grid item xs={4}>
                <Grid container justifyContent="center">
                    <Box component="img" src={`${RitualAltar}`} align="center" 
                        width={375} 
                        height={375} 
                    />
                </Grid>
                <Typography align="center">
                        This is what a Ritual Altar looks like
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Grid container justifyContent="center">
                    <ArrowForwardIcon sx={{width: 700, height: 400}}/>

                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container justifyContent="center">
                    <Box component="img" src={`${FavourInterface}`} align="center" 
                        width={375} 
                        height={375} 
                    />
                </Grid>
                <Typography align="center">
                    This is what the Favour Interface looks like when opened
                </Typography>
            </Grid>
        </Grid>
    )
}

export default RitualImagesCap;