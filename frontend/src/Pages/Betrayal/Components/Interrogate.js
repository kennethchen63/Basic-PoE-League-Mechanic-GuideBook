import React from 'react'
import { Grid, Typography } from "@mui/material";

function Interrogate() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Interrogation
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    At the left side, the option will always be to interrogate them, where they will interrogated in prison for 3 turns. Each turn will give you intelligence. Upon release, they will return to their divison and lose 1 rank.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The members being interrogated can be seen in the bottom box. There is a maximum of 3 members that can be interrogated at the same time. If you interrogate a 4th, the 1st one will be automatically released.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If you interrogate a rank 1 member or non-assigned member, they will have a chance to be removed from the Syndicate Board upon release. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Leaders can also be interrogated, doing so will drop them from being the leader of that division. This will cause another member of that division to rank up to being the leader.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Interrogate;