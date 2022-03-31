import React from "react";

import { Box, List, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LeagueListItemButton from "../LeagueListItemButton/LeagueListItemButton";

const useStyles = makeStyles(theme => ({
    list: {
        width: "auto",
        maxWidth: 180, 
        height: "auto", 
        maxHeight: 1000, 
        backgroundColor: 'dimgrey', 
        overflow: 'auto',
        //margin: -8, 
        // marginTop: 54,
    },
}));


const LeagueList = ({m}) => {

    const classes = useStyles();

    return (
        <div>
            <Grid item xs={12} container>
            <Box sx={{margin: -8, marginTop: m}} className={classes.list}>
                <List>
                    <LeagueListItemButton name={"Expedition"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Ritual"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Heist"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Harvest"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Delirium"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Metamorph"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Blight"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Legion"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Synthesis"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Betrayal/Syndicate"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Delve"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Incursion/Alva"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Bestiary/Einhar"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Abyss"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Harbinger"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Breach"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Essence"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Torment"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Bloodlines"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Beyond"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Ambush"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Invasion"}></LeagueListItemButton>
                    <LeagueListItemButton name={"Nemesis"}></LeagueListItemButton>
                </List>
            </Box>
            </Grid>
        </div>
    )

}

export default LeagueList;