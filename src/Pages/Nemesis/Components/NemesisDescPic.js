import React from "react";
import { Grid, Typography } from "@material-ui/core";

function NemesisDescPic() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Nemesis
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    The Nemesis league mechanics introduces modifiers to rare monsters shown in bolded yellow.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These nemesis modifiers only apply to areas which have the modifier "Rare Monsters each have a Nemesis Mod"
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Nemesis modifiers cause the monster to have extra unique powers and increasing their difficulty.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Another main use for Nemesis modifiers is the expensive and valuable Unique Belt, Headhunter that allows the player to steal Rare Monster's modifiers for 20 seconds.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table of all possible Nemesis modifiers.
                </Typography>
            </Grid>
        </Grid>
    )
}


export default NemesisDescPic;