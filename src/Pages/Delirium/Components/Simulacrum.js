import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import SimStart from "../Images/SimStart.webp"
import Omniphobia from "../Images/Omniphobia.png"
import Kosis from "../Images/Kosis.webp"

function Simulacrum() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Simulacrum
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Once you have collected 300 Simulacrum splinters, they will form the Simulacrum item. This is a special map item that is used in your map device.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    When activated, it will open portals to a random Act Town that is Delirious. In this zone you will find a Strangely Familiar Entity and your stash. This is where you begin the encounter everytime you finish a wave, up to 30.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${SimStart}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Every wave will have different modifiers and rewards that will build up as you kill monsters. You may also encounter the 2 Delirium bosses (Omniphobia and Kosis) starting at wave 10.
                </Typography>
            </Grid>
            <Grid container justifyContent="space-around">
                <Box 
                    component="img" 
                    src={`${Omniphobia}`} 
                    align="center" 
                />
                <Box 
                    component="img" 
                    src={`${Kosis}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Each wave stops spawning monsters at some point and will allow you to store the rewards for that wave. The goal should be to stay alive while killing as many monsters as you can in the limited time in each wave.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Simulacrums are the main way to obtain the Unique Delirium Cluster Jewels and various other Delirium exclusive Unique items. The Delirious percent effects of each wave are also shown in the above table.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    It is expected for you to not be able to complete Simulacrum. It becomes extremely difficult after wave 20. Even if you do fail and lose all 6 portals, you can count it as completed at wave 20. Majority of builds cannot push it too much further.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Simulacrum;