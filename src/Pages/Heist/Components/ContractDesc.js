import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ContractUI from "../Images/ContractUI.JPG"
import RogueMarker from "../Images/RogueMarker.JPG"
import Contractpic from "../Images/Contract.JPG"

function ContractDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Contracts
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    To begin a contract, talk with Adiyah with the chosen contract and select which rogues to hire to complete the heist. (Costs Rogue Markers)
                </Typography>
            </Grid>
            <Grid container justifyContent="space-around" alignItems="center">
                <Box 
                    component="img" 
                    src={`${Contractpic}`} 
                />
                <Box 
                    component="img" 
                    src={`${RogueMarker}`} 
                />
                <Box 
                    component="img" 
                    src={`${ContractUI}`} 
                    sx={{height: 600, width: 335}}
                />
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you confirm your Rogue and job, Adiyah will open a portal to the Heist location. From there, there will be various doors and rewards you can see in your map. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The objective is to obtain the Heist Item at the end without triggering the alarm. There is a bar at the bottom that shows your alert level. All items obtained in Heist is considered Contraband.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Contraband items cannot be interacted in any way except moving them in your inventory and picking up/dropping them from your inventory. Once you leave the Heist, the Contraband status is removed from the item. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    If you die at any point during the Heist, all Contraband items are dropped from your inventory, but are retrievable upon revival. However, if you die during lockdown, they are lost forever.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The alert level fills up as you open reward chests, once it is full, there will be a timer until you will be locked out from obtaining the objective at the end.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    You should fill up the bar as much as you can without triggering the alarm before getting the objective item. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Once you obtain the objective item, you will need to make your way back to the entrance without dying. With the objective item stolen, you can sell it to the vendors at Rogue Harbour to obtain more Rogue Markers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    This is the main way to make your Rogue Marker Supply, as they are used for Grand Heists. They contain valuables that are not found in regular contracts.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ContractDesc;