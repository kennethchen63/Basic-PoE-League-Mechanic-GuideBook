import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import TimelessMap from "../Images/TimelessMap.JPG"
import Rewards from "../Images/Rewards.JPG"

function Timeless() {

    return(
        <Grid container justifyContent="center">
        <Typography variant="h2">
            Domain of Timeless Conflict
        </Typography>
        <Grid container justifyContent="center">
            <Typography>
                After you obtain at least 2 different emblems, you are can use them in your map device to open portals to the Domain of Timeless Conflcit.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                If you open the Domain of Timeless Conflict using 4 different emblems, upon completion you will unlock the 5th map device slot.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
                <Box component="img" src={`${TimelessMap}`} align="center"/>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                The Domain of Timeless Conflict is a special map dedicated for Legion content, from the mini map you can see these green markers. 
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                These green markers indicate Legion Generals, you should keep track of the location of these Generals as you will need to focus on them.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                In the middle of the map you will see a big purple crystal and a faint purple aura around it.
                This purple crystal will be activated after staying in this purple area for a couple seconds.
                Activating this purple crystal will start the encounter.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                After activating the crystal, enemies from the Legion Fractions will be spawned and a timer will appear.
                You will need to focus on killing enemies with icons on top of them, specifically each of the Generals.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                Upon killing each of these enemies, their reward icon will appear on the bottom, showing the amount of rewards you have accumulated.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
                <Box component="img" src={`${Rewards}`} align="center"/>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                Once you kill the monsters, you will need to go back to the purple crystal in the middle and stay in its aura to "reset".
                Doing this will respawn new monsters, and is the loop cycle you should be doing.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography variant="h4">
                Kill Generals and monsters on the way there and then Reset
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography variant="h5">
                Note: Generals have a cooldown of being respawned every 20 seconds, so time your resets appropriately.
            </Typography>
        </Grid>
    </Grid>
    )
}

export default Timeless;