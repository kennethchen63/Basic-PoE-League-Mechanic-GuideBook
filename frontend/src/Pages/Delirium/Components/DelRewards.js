import React from 'react'
import { Grid, Typography } from "@mui/material";
import Clusters from './Clusters';
import RewardTable from './RewardTable';

function DeliRewards() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delirium Rewards
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Delirium's exclusive rewards are cluster jewels and Simulacrum splinters. Cluster jewels are special types of jewels you can socket at special locations in the passive tree. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  They expand the passive with new nodes you can skill into. 300 Simulacrum splinters form the Simulcrum, which is a special end game Delirius map you can run.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 21 different reward types you can receive from Delirium. There are a total of 20 different Delirium Orbs you can receive.
                </Typography>
            </Grid>
            <RewardTable/>
            <Clusters/>
        </Grid>
    )
}

export default DeliRewards;