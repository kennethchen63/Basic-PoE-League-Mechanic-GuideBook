import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import Strongbox from "../Images/Strongbox.webp"

function AmbushDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Ambush
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Strongbox}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Ambush league mechanic introduces Strongboxes to the game.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These Strongbox when activated spawn 3 packs of monsters. Strongboxes can be 4 different rarities: Normal, Magic, Rare, Unique. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Normal Strongboxes do not have any modifiers to it. Magic can have up to 2 modifiers. Rares can have up to 6 modifiers. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Unique Strongboxes typically have their own theme with its own themed loot and themed monsters. Though most of them are not valued much over normal strongboxes.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Strongboxes' main use are to provide more monsters to drop additional loot in juiced maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    All prefixes are modifiers that affect the box and monsters spawned. Suffixes affect the loot dropped from the Strongbox.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 11 different types of strongboxes. Below is a table listing the different types and rewards.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AmbushDesc;