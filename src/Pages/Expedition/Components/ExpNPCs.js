import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ExpTable from "./ExpTable";

function ExpNPCs() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Kalguuran Expedition NPCS
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    The Expedition league mechanic introduces 4 NPCs from the Kalguuran Expedition and their excavations.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    One of the 4 NPCs will spawn with a excavation area for you to explore with explosives. The excavation area will contain markers for monsters, chests and remnants.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Each of the 4 NPCs have their own type of Artifacts and bosses. Artifacts are used to barter and trade with the NPCs. The bosses are only found in Logbooks of their faction.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Logbooks are enlarged verisons of the excavation Expedition encounters you discover in maps, with hidden zones and bosses you can explode to uncover and obtain more rewards. Unique Expedition items are only found this way, dropped from bosses.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Note: You can reroll the Implicits on logbooks with Blessed Orbs. Focus on pathing to the bosses/hidden areas first if you have any, then focus on obtaining remnant/reward modifiers that you would want. (Bosses are also affected by the modifiers)
                </Typography>
            </Grid>
            <ExpTable/>
        </Grid>
    )
}

export default ExpNPCs;