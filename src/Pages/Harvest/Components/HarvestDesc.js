import React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import Harvest from "../../../images/Harvest.png";
import SacredGrove from "../Images/SacredGrove.webp";
import Patches from "../Images/Patches.png";
import Crafting from "../Images/Crafting.png";

function HarvestDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Harvest
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Harvest}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Harvest league mechanic introduces the Harvest crafting system. Harvest is introduced with a portal to the Sacred Grove randomly found in maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${SacredGrove}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Inside the Sacred Grove you will find patches of seeds that contain monsters and various different crafts.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You will have a choice between 1 of 2 patches to activate to obtain their rewards. Each color of seeds have their own type of crafting.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Patches}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you have completed your first harvest encounter, you will unlock the Horticrafting Station. This can store up to 10 crafts (up to 15 when you defeat Oshabi). 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You can add the crafting station to your hideout for future use.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Crafting}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 4 tiers and 3 different color of seeds (Blue/Primal, Purple/Wild, and Yellow/Vivid)
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Tier 4 seeds all have their own boss and also have a chance to drop a Sacred Blossom, which is used to challenge Oshabi, the Harvest Boss.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HarvestDesc;