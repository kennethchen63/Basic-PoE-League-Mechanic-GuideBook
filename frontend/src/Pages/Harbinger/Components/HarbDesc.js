import React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import Harbinger from "../../../LeagueLogos/Harbinger.jpg";

function HarbDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Harbinger
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Harbinger}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Harbinger league mechanic introduces special monsters called Harbingers and special Harbinger themed maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Harbinger monsters are invulnerable, but summon other monsters to fight for them. Harbingers lose life as these summoned monsters are killed.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Harbinger monsters drop an abundant of Harbinger rewards (Shards of currency items)
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Harbingers are valued highly as extra monster packs as they provide an additional way for more loot.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Harbinger Orbs are main way to obtain BeachHeads (Harbinger Unique Maps), by using a Harbinger Orb on any non-corrupted/non-unique map to upgrade the map's tier for a chance to turn into a BeachHead.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are 3 different tiers of BeachHeads, (5, 10, 15), each turned into its tier from tiers below. (1-5 for tier 5, 6-10 for tier 10, 11-15 for tier 16)
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The unique BeachHead maps contain only Harbinger monsters and only drop shard currency as well as its unique Harbinger shard item upon killing the Harbinger boss at the end.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Unique Harbinger shard items will need to be assembled using the other shard pieces to create the usable Unique Item. (Shards are tradeable)
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Unique Harbinger items can be further upgraded by completing the Infused BeachHead map, only obtainable by Harvest and its Harbinger crafts.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Infused BeachHead is a tier 16 map and is significally more difficult than lower tiered BeachHeads.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HarbDesc;