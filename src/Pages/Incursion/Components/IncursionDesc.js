import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import Incursion from "../../../images/Incursion.jpg"
import AlvaIncursion from "../Images/AlvaIncursion.JPG"
import Stone from "../Images/Stone.JPG"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

function IncursionDesc() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Alva's Incursion and the Temple of Atzoatl
            </Typography>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Incursion}`} 
                    align="center" 
                    sx={{height: 360, width: 640}}
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Incursion league mechanic introduces the Incursion system and Alva as a master to introduce the Temple of Atzoatl.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Alva's mission is to help you create time portals to a random room in the Temple of Atzoatl. Each temple has 12 total incursions.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    After completing all 12 of Alva's incursions, the temple will be complete and you will be able to extract it from her as a Map.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    When opening a map with Alva selected as the master, 3 temporal incurisons will be randomly created on the map.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   When you find Alva and interact with her, you will be able to see a layout of a specific room she can open a time portal to and the current Temple layout.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   You can also see the connections of each room, and a basic description of each room when you hover over them.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${AlvaIncursion}`} 
                    align="center" 
                    sx={{height: 370, width: 600}}
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h6" className={classes.bold}>
                   Note: You can always open this map with your league hotkey (Default: V), even when you are inside the time portal.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   This is an example of a layout that Alva shows you, however, in this example, there are only 3 incursions remaining.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   Alva has randomly selected the "Pits" room as the destination for her time portal. There are two objective choices labeled by the squares on the map.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  Kill the top architect (square) to change the room to a Strongbox Chamber OR kill the bottom architect (square) to change the room to a Tempest Generator.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  A timer will countdown once you start moving inside the incursion and killing monsters adds to the timer. Once the timer expires, you will be teleported out.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  Once you have chosen a room that you would like, enter Alva's time portal and focus on killing the selected Architect for the room that you want.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  Once you have killed the desired Architect and changed the room to the one you want, the other architect will disappear, proceed to killing all other monsters in the area.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  There will be a bar at the bottom that shows how many monsters are left. If you don't manage to kill any of the architects in the allocated time, the incursion will be decremented but the room will not change.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Box 
                    component="img" 
                    src={`${Stone}`} 
                    align="center" 
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  Sometimes these monsters will drop a Stone of Passage, where you can pick these up as items and use these on the doors labeled on the map (Circle Icons).
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                  You should focus on connecting rooms together so you can access the Apex of Atzoatl and any other rooms that are unaccessible.
                </Typography>
            </Grid>
        </Grid>
    )
}


export default IncursionDesc;