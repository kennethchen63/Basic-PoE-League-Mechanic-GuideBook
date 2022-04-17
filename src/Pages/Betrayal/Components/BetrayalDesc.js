import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import Betrayal from "../../../images/Betrayal.png"

function BetrayalDesc() {
    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                The Immortal Syndicate/Betrayal
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Betrayal}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Betrayal league mechanic introduces the Immortal Syndicate System, unveil crafting system, and Jun as a master.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Immortal Syndicate is an organization being investigated by Jun. The Immortal Syndicate is divided up to 4 divisions: Fortification, Transportation, Research, and Intervention. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You will encounter 3 out of 4 of these divisions in a zone where Betrayal is activated. Each of divisions requires you to defeat the Syndicate members present.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    After defeating all the Syndicate members, you will be able to interact with them and upon interaction, the Syndicate Board will be opened.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BetrayalDesc;