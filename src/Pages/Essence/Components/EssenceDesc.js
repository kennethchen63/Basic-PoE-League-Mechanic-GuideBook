import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Essence from "../../../images/Essence.JPG";
import EssencePack from "../Images/EssencePack.JPG"

function EssenceDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Essence
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Essence}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Essence league mechanic introduces the Essence monsters and crafting system.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Essences are found from trapped Essence monsters found in areas. They will be labeled in blue crystals with the Essence(s) they contain. You need to click the Essence multiple times to activate and release the monsters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${EssencePack}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 25 different types of essences, 20 being found naturally. The other 4 are obtained through other means. There are a total of 8 tiers. 3 Essences of the same tier can be vendored for 1 tier higher.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Tier 5+ Essences can reroll the item like a Chaos Orb (Screaming/Shrieking/Deafening). Tier 8 is reserved for the 4 special corrupted Essences.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These 4 special valuable essences (Insanity, Horror, Delirium and Hysteria) are obtained through using a type of corrupt essence called Remnant of Corruption on tier 5 Essence encounters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    An easy way to remember which ones to corrupt to the special essences is that all tier 5 essences are Purple.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Remnants of Corruptions are found randomly in Essence encounters, these cannot be modified and have 4 different outcomes upon using them on other Essence encounters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The 4 outcomes are: 1. The monsters are released immediately. 2. All Essences have +1 to their tier. 3. The monster gains an additional essence. 4. Transform the essences into the next group tier.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default EssenceDesc;