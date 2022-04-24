import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import Abyss from "../../../LeagueLogos/Abyss.jpg"

function AbyssDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Abyss
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Abyss}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Abyss league mechanic introduces the Abyss, Abyssal Depths, Abyss items, and Abyss monsters to zones.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Abyss are labeled with an icon on the minimap and shown as cracks in the ground where abyss monsters will crawl out of. This crack expands as you follow it until expands into a hole in the ground.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If you do not follow the crack along its path for a period of time, it will eventually die out and you will fail the encounter. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The hole will spawn additional rare Abyss monsters which you will need to clear to progress the Abyss hole. Continue until the crack ends with either a Abyssal Trove or an opening to the Abyssal Depths.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Abyssal Troves are special Abyss Chests that when opened contain at least one Abyss Jewel. Abyssal Depths are a mini abyss side area (like Vaal side areas).
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Abyssal Depths can contain either a Stygian Spire or a Abyss Boss at the end. Stygian Vises are stationary Abyss cracks that shoot out abyss holes and drop a Styigan Vise on death.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are 2 different types of Abyss Bosses. Ulaman, Sovereign of the Well and Amanamu, Liege of the Lightless. They both drop from the same loot pool but have different skillsets.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AbyssDesc;