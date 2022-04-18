import React from 'react'
import { Grid, Typography } from "@mui/material";
import RewardTable from './RewardTable';

function ContractRewards() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Contract Rewards
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                   The rewards in contracts/blueprints are based on the type of skill required in the contract. However, there are also 5 unique contracts with their own unique as rewards.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                Below is a table list of all possible rewards and skills associated with each.
                </Typography>
            </Grid>
            <RewardTable/>
        </Grid>
    )
}

export default ContractRewards;