import React from 'react'
import { Grid, Typography, Button, Box, } from "@material-ui/core";
import PoE from "../Images/PoE.png"

const leagues = [
    {name: "Abyss"},
    {name: "Ambush"},
    {name: "Bestiary"},
    {name: "Betrayal"},
    {name: "Beyond"},
    {name: "Blight"},
    {name: "Bloodlines"},
    {name: "Breach"},
    {name: "Delirium"},
    {name: "Delve"},
    {name: "Essence"},
    {name: "Expedition"},
    {name: "Harbinger"},
    {name: "Harvest"},
    {name: "Heist"},
    {name: "Incursion"},
    {name: "Legion"},
    {name: "Metamorph"},
    {name: "Ritual"},
    {name: "Synthesis"},
    {name: "Torment"},
]

function HomeDesc() {

    return(
        <Grid container justifyContent="center">
            <Typography align="center" variant="h2" >
                Welcome to the Basic Guide Book for Path of Exile Leagues Mechanics you can find throughout your playthrough!
            </Typography>
            <Grid container justifyContent="center">
                <Box component="img" src={`${PoE}`}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography align="center" variant="h4">
                    If you are unfamiliar with what leagues are in Path of Exile, they are a type of mechanic that are potentially added to Path of Exile's base game after each expansion that are released every couple months!
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography align="center" variant="h4">
                    Here are the different league mechanics available in the current Path of Exile patch.
                </Typography>
            </Grid>
            <Grid container justify='space-evenly'>
                    {leagues.map((leagues) => (
                        <Box sx={{m: 2}}>
                            <Button 
                                href={leagues.name}
                                variant="contained"
                                size="large"
                                style={{textTransform: "none"}}
                            >
                                <Typography variant="h2">
                                    {leagues.name}
                                </Typography>
                            </Button>
                        </Box>
                    ))}
            </Grid>
        </Grid>
    )
}

export default HomeDesc;