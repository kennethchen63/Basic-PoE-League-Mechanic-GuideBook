import React from 'react'
import { Grid, Typography, Box } from "@mui/material";
import AbyssItemTable from './AbyssItemTable';
import Stygian from "../Images/Stygian.webp";

function AbyssItems() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Abyss Items
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${Stygian}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are special Abyss Items that are introduced in the Abyss league mechanic.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    One of those are Abyss Jewels, they are similar to normal jewels but themed differently. Abyss jewels can be socketed in any normal jewel socket but also abyss sockets.
                </Typography>
            </Grid>            
            <Grid container justifyContent="center">
                <Typography>
                    Another different type of Abyss item is the Styigan Vise, similar to a normal belt, but has an abyssal socket as its implicit. Styigan Vises are highly valued as they provide better stats than majority of other belt bases.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Abyss sockets are found on special Abyss items like the Abyss Belt: Styigan Vise. Some other sources of abyss sockets are crafted with the Hollow Fossil found in Delve.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <AbyssItemTable/>
            </Grid>
        </Grid>
    )
}

export default AbyssItems;