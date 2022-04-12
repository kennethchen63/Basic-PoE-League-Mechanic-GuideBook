import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Legion from "../../../images/Legion.png"
import Activate from "../Images/Activate.jpg"
import Monolith from "../Images/Monolith.png"
import Indicate from "../Images/Indicator.webp"

function LegionDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Legion
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Legion}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Legion league mechanics introduces the Timeless Monolith in maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Monolith}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Legion Monoliths can be interacted with to reveal a battle between two legion fractions. Upon reveal, you will have limited time to destroy these enemies frozen in time.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once the timer runs out, these enemies will be released and you will need to fight them again. Thus, you are able to choose the difficulty you would like against the Legion.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Some of these enemies will have labels above them, these are called Sergeants and are important to focus on if you want more rewards and also drop Legion Splinters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Sometimes, there will also be unique boss enemies called Generals at the far end of the battle and the two legion formations. These will give a large abundant of Legion Splinters of their fraction.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Activate}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These generals can be seen by a faint purple glow flowing from the Monolith upon interacton. Below is an iamge as an example.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Indicate}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 5 fractions (Maraketh, Karui, Vaal, Templar, Eternal), the rarest and most valued being Maraketh.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Note: The Maraketh General (Aukuna) has two phases, one while mounted on the raptor, and the second after you kill her once.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LegionDesc;