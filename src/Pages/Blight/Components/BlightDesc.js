import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import Blight from "../../../images/Blight.png"
import Encounter from "../Images/Encounter.jpg"

function BlightDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Blight
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Blight}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Blight league mechanic introduces Blight encounters to areas (a tower defense type encounter), oils, anointment, and Cassia as an NPC to assist you.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Blight encounters are randomly found from Fungal Growths in zones. Cassia will be there to assist you and once you interact with it, a purification pump will be created on it with roots extending outwards in random directions.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These roots are the routes Blight monsters will take to reach your purification pump. At the ends of these roots will be portals that spawn monsters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Before monsters start spawning, you will be given some time to prepare by building towers. On the sides of the roots you will see 6 tower options to build from. Each with their unique ability associated with their icons. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Encounter}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Some portals may also have these tower icons on them, this means those monsters spawned from that portal is resistant to that type. Consider building other towers if you see these.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Your objective is to repel the monster waves away from the pump until the portals expire. The purification pump has 10 lives. Normal monsters that get through remove 1 life, magic remove 2, rare remove 5 and bosses remove 10.
                </Typography>
            </Grid>            
            <Grid container justifyContent="center">
                <Typography>
                    If all pump lives are removed, you will fail and receive no chest rewards. The portals will turn into random chest rewards once the blight encounter is complete. The pump itself will also drop loot from the monsters you've killed.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If some portals are completed but you fail the encounter, those chest rewards will remain. Blight monsters will only stop if there are other entities in its path to the pump. Use this as a way to delay monsters.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Blighted maps are also found in blight encounters. Though they are only specifically found in Oil reward chests. Blighted maps are enlarged blight encounters, where all monsters are replaced by Blight and has plenty of different rewards.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The pump in Blighted maps instead have 30 lives and there are plenty more portals, rewards, and monsters. Blighted maps also have a chance to drop Blight-Ravaged maps, which are even harder Blighted maps.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BlightDesc;