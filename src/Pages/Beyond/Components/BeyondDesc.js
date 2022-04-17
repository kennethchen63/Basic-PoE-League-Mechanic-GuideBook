import React from 'react';
import { Grid, Typography, Box } from "@material-ui/core";
import BeyondBossTable from './BeyondBossTable';
import Portal from "../Images/Portal.webp"

function BeyondDesc() {

    return(
        <Grid container justifyContent="center">
        <Typography variant="h2">
            Beyond
        </Typography>
        <Grid container justifyContent="center">
            <Typography>
                The Beyond league mechanic introduces a new pack of monsters to maps for more loot.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                Beyond monsters are spawned by killing other monsters in maps with beyond enabled. Each monster you kill will have a chance to create a small red orb in these maps.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <Typography>
                Once four red orbs are created near each other (roughly 1 screen wide), a beyond portal will open and spawn a pack of beyond monsters based on a Beyond Boss.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
                <Box component="img" src={`${Portal}`}/>
            </Grid>
        <Grid container justifyContent="center">
            <Typography>
                If 3 portals are created near each other, a Unique Beyond Boss will spawn. There are 6 different Beyond bosses that can spawn. The Bloodline modifier "Void of Abaxoth" also spawns a beyond boss.
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <BeyondBossTable/>
        </Grid>
    </Grid>
    )
}

export default BeyondDesc;