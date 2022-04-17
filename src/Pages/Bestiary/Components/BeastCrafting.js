import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import BeastCraft from "../Images/BeastCraft.webp";
import BestiaryTable from './BestiaryTable';

function BeastCrafting() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Beast Crafting
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${BeastCraft}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    In the Menagerie, you will find a pen area with a Blood Altar you can interact with. This Blood Atlar is the interface for Beast Crafting. Here you will see a list of all crafts available with beasts.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Some crafts will require a specific type of beast while others don't. These specific beasts are usually the Red Beasts while the others are generic Yellow Beasts.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table of all the crafts and beasts required for them.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <BestiaryTable/>
            </Grid>
        </Grid>
    )
}

export default BeastCrafting;