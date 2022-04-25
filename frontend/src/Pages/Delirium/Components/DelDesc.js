import React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import Delirium from "../../../LeagueLogos/Delirium.webp";
import Mirror from "../Images/Mirror.webp";
import Encounter from "../Images/Encounter.webp";
import DeliTable from './DeliTable';
import MistTable from './MistTable';

function DelDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delirium
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Delirium}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Delirium league mechanic introduces the delirious, a zone-wide effect that modifies the monsters in the area.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    To begin Delirium, you will see a Mirror of Delirium near the entrance of an area. Once you walk through this Mirror, Delirium will be activated. The zone will be turned grayish covered in mist.  
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Mirror}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    New Delirious monsters will be spawned and existing monsters will be buffed. There will be a reward bar shown near the bottom left. As you kill enemies in this mist, the reward bar will fill up.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Once the reward bar fills, it will reset for another accumulation of loot. All the loot accumulated will be dropped at your feet at the end of the encounter. Additionally, there will be another reward type added once the first reward reaches 3 and 5.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Encounter}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The monsters also scale as obtain more rewards and travel further away. There are 5 layers of Delirious each increasing monster damage and decreasing the damage monsters take.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Delirium can also drop Delirium orbs as rewards, where you can turn any map into permanent Delirious. Percentages from the table are taken into account in those maps.
                </Typography>
            </Grid>
            <DeliTable/>
            <Typography variant="h2">
                Mist
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    There is also a hidden timer that counts down as you complete the encounter, when you leave this mist, it will show up and you will have 5 seconds to return to the mist or the Delirium will end.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are several other league mechanics that will pause the moving mist while you are completing the other league mechanic. There are others that extend the timer as well. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You may also encounter one of 2 bosse that are in Delirium while in the mist, Omniphobia Fear Manifest and Kosis The Revelation. They are both marked on your minimap with their own unique icons.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Focus on exploring the map and activating these various league mechanics so you can maximize your profits from Delirium by pausing and extending the timer.
                </Typography>
            </Grid>
            <MistTable/>
        </Grid>
    )
}

export default DelDesc