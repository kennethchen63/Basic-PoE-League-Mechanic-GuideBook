import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import Delve from "../../../images/Delve.jpg";
import DelveUI from "../Images/DelveUI.jpg";
import FracturedWall from "../Images/FracturedWall.jpg";
import FracturedWallMap from "../Images/FracturedWallMap.jpg";
import Generator from "../Images/Generator.png";

function DelveDesc() {
    
    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delve
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Delve}`} 
                    align="center"
                    sx={{height: 500, width: 800}}
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Delve league mechanic introduces the Azurite Mine, fossils, resonators, Azurite, Sulphite and Niko.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Azurite Mine is an infinite scaling dungeon that is composed of many nodes. Nodes are ares in the mine that you can explore, each connecting to other nodes.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${DelveUI}`} 
                    align="center"
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Azurite Mine also contains the Mine Encampment, a Town for Delve, where you can stash items, and vendor items with Niko. Additionally, here is where you upgrade Delve-related capabilties.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Delve capabilties include more flares/dynamites, higher darkness resistance, bigger light radius, and bigger sulphite capacity.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Generator}`} 
                    align="center"
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Nodes that you have cleared will have the option for you to teleport there to start traveling to other nodes. To start, you need to collect Sulphite found in other areas.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Sulphite is used to power the Crawler, the machine that creates the path connecting nodes together. The Crawler has its own lighting as it travels to nodes. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Delving to each node costs Sulphite, once you begin, the Crawler will start moving to create a path to the node. You will need to follow it until it reaches its destination. Sulphite is consumed as it travels to the node (not all at once).
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    On the path there, there will be monsters and you will need to clear them. As you progress deeper, the more difficult the monsters will be, and the better the rewards will be.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The main rewards of Delve are the fossils and resonators it provides. These are randomly found on the side paths along the main path while delving to different nodes.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    However, deterring from the path and light causes you to build up Darkness stacks. Darkness causes you to rapidly lose life and causes monsters in the Darkness to be invulnerable.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You may encounter nodes of Azurite while delving. These nodes will provide you with Azurite upon completion of that node. Azurite is used back at the Mine Encampment to upgrade your Delve capabilities.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You may also find hidden paths and fractured walls on the side paths. Use flares to light up areas to use dynamites to blow up the walls to reveal treasure or path on the other side.
                </Typography>
            </Grid>
            <Grid container justifyContent="space-around">
                <Box 
                    component="img" 
                    src={`${FracturedWall}`} 
                    align="center"
                />
                <Box 
                    component="img" 
                    src={`${FracturedWallMap}`} 
                    align="center"
                />
            </Grid>
        </Grid>
    )
}

export default DelveDesc;