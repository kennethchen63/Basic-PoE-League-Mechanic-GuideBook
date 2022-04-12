import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Tormentpic from '../../../images/Torment.png';

function TormentDescPic() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Torment
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Tormentpic}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Torment league mechanic introduces new tormented spirits that have special powers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These tormented spirits have the ability to roam around and inflict their powers onto nearby monsters while also increasing its item quantity and rarity.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If it runs into a Rare/Unique monster, it can possess that monster making it inherit the powers and increasing its difficulty.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table of all possible Tormented Spirits and their modifiers.
                </Typography>
            </Grid>
        </Grid>
    )
}


export default TormentDescPic;