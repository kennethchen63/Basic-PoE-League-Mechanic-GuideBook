import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Meta from "../../../images/Metamorph.png"
import MetaUI from "../Images/MetaUI.png"

function MetaDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Metamorph
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Meta}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Metamorph league mechanics introduces the metamorph system maps.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Upon opening a map with metamorph, monsters are randomly selected to drop an organ on death. 
                    These organs are the Brain/Eyes/Heart/Liver/Lung.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    At anytime when you have obtained one of each organ part, Tane will appear with a Metamorph vial. 
                    Players can interact with and create a custom metamorph based on the organ and its modifiers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Each of these organs have a rarity based on the monster. 
                    Each of these organs have their own reward and modifiers based on its tier.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Metamorph is currently the main way to obtain catalysts, an item used to enhance specific modifiers on jewellery with quality. 
                    Catalysts follow the same quality scheme as for armor and weapons (1% for unique/rare items, 2% for magic items, 5% for normal items).
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Additionally, if you select the boss organ, you will recieve that organ upon killing the Metamorph that you can then use later in Tane's Laboratory.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${MetaUI}`} align="center"/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    This is an example of the Metamorph interface when you interact with Tane's Metamorph Vial
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MetaDesc;