import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import RewardTable from './RewardTable';
import OilTable from './OilTable';
import Anoint from "../Images/Oils/Anoint.webp"

function BlightRewards() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Blight Rewards
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                   There are many different reward types you can obtain from blight. However, the main rewards from blight are Oils. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <RewardTable/>
            </Grid>
            <Typography variant="h2">
                Anointment and Oils
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Oils are only dropped from blight reward chests and are used to anoint amulets with Cassia. anointment allows you to have a passive skill node on your amulet without directing skilling it.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You can also anoint rings to buff specific towers and blighted maps for more rewards. If you would like a full list of anointments click the following link.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h4">
                    <a target="_blank" rel="noopener noreferrer" href='https://blight.raelys.com/'>
                        Anointment List
                    </a>
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Anoint}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <OilTable/>
            </Grid>
        </Grid>
    )
}

export default BlightRewards;