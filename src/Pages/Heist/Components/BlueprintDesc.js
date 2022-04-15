import React from 'react';
import { Grid, Typography, Box } from "@material-ui/core";
import Blueprint from "../Images/Blueprint.webp"

function BlueprintDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Blueprints
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Blueprints are found the same way as contracts, but are far more valuable and cost far more Rogue Markers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you have accumulated a good amount of Rogue Markers you may attempt to do some blueprints or Grand Heists.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    To start, you should go to the Planning Room near the entrance of the Rogue Harbour, from there you can go to the table to assign Rogues to different jobs.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    From the Planning Room you may see that some rooms and wings are locked/hidden. If you would like to access them during the Grand Heist you will need to speak to Whakano.
                </Typography>
            </Grid>
            <Grid container justifyContent="space-around" alignItems="center">
                <Box 
                    component="img" 
                    src={`${Blueprint}`} 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Whakano will help reveal them at a cost of Rogue Markers and a limited supply. You can obtain reveals by doing heists with the available Rogues that can reveal.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Wings are sections of the Grand Heist or rewards at the end that you can obtain, there more you have, the more rewards you can get. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Rooms are confined to each wing, with its own alert level, so choose carefully. You may not have enough alert level to obtain every single room reward.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Lastly, once you have configured your Rogues and revealed the rooms/wings you would like, proceed to Adiyah to open the Grand Heist. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Grand Heists are very similar to normal heists, except at the end you will have a choice of reward. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Additionally, after escaping with the loot of a wing, you can use the portal out safely to store any loot while keeping the Grand Heist open to do the other wings.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BlueprintDesc;