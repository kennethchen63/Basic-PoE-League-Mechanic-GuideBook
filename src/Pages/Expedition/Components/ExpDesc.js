import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Expedition from "../../../images/Expedition.jpg";
import Excavation from "../Images/Excavation.png";

function ExpDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Expedition
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Expedition}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Expedition league mechanic introduces 4 NPCs from the Kalguuran Expedition and their excavations.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    One of the 4 NPCs will spawn with a excavation area for you to explore with explosives. The excavation area will contain markers for monsters, chests and remnants.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Excavation}`} 
                    align="center" 
                    sx={{height: 500, width: 900}}
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These remnants add modifiers to the excavation, both affecting the loot and monsters itself. You will have a limited number of explosives to place down to activate these monsters, chest and remnants.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The remnant modifiers affect the markers exploded and subsuquent markers exploded from your placed explosives. You should be trying to get the most important remnants first then go down the list.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Any modifiers that help you obtain more loot and increases chance of Logbooks are the most valuable. Duplicating Runic Monsters is a remnant you should definetly go for if you see it.
                </Typography>
            </Grid>                    
            <Grid container justifyContent="center">
                <Typography>
                    The skull markers found in the excavation are Runed Monsters, these are like Rare Monsters for Expedition, these monsters will have a chance to drop Expedition Logbooks. Logbooks are also rarely found in the chests as well.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Logbooks are the special Expedition maps for Expedition encounters, their excavation area is much larger, contains many more rewards, chests, and has a chance to contain Expedition bosses.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ExpDesc;