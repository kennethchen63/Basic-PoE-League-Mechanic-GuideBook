import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import Bestiary from "../../../images/Bestiary.webp";
import BestiaryTab from "../Images/BestiaryTab.jpg";

function BestiaryDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Bestiary
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Bestiary}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Bestiary league mechanic introduces Beastiary Monsters, the Bestiary Crafting System and Einhar as a master.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Beastiary Monsters are Rare Animal Monsters that modified Rare Monsters that have unique abilities. They cannot be killed and can only be captured by Einhar using his nets.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    In each zone there are a limited number of these Beasts for Einhar to capture. Even though they are not killed, Einhar capturing them will drop their loot.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are two rarity types of Beasts, Yellow Beasts and Red Beasts. Yellow Beasts are more common and typically are used for less valuable crafts. Red Beasts are rare and are used for more advanced crafting.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The captured beasts can be seen in your Bestiary tab or in your Menagerie. The Menagerie is where all your captured beasts go to. You can see all your captured beasts in closed off areas and it is also where you do your beast crafting.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${BestiaryTab}`}/>
            </Grid>
        </Grid>
    )
}
export default BestiaryDesc;