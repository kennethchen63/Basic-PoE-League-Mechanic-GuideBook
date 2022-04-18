import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import Board from "../Images/SyndicateBoard.jpg"
import Interrogate from './Interrogate';
import RightOption from './RightOption';

function BoardDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                The Syndicate Board
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Board}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Syndicate Board represents the current Syndicate Organizations, its divisons, members, leaders and connections.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The final leader at the top is Catarina, the main Syndicate Boss. Catarina is revealed at the end when you obtain enough intelligence for her.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below Catarina are the 4 divisons, each with its own leader that may be hidden. You will reveal these leaders when you encounter them in Betrayal missions. Being the leader also doubles the rewards you get when you raid a Safehouse.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Each member of the Syndicate can have connections/relationships with others, this determines how likely these members are to show up to each other's encounters. The more connections, the more likely.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Members of the Syndicate have a rank from 0-3, the higher the rank the more items/buffs they will have. Members must be at least rank 1 to be assigned to a division. Each division has their own rewards and encounter in Betrayal.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    When you interact with any defeated member in a zone with Betrayal active, you will be presented with the board. You are given three options to choose from that affects what happens to that member.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    All 3 options will also drop loot for each member. The loot can contain items with veiled modifiers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Interrogate/>
            </Grid>
            <Grid container justifyContent="center">
                <RightOption/>
            </Grid>
        </Grid>
    )
}

export default BoardDesc;