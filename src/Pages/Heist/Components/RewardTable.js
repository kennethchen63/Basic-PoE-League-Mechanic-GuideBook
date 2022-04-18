import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, Grid, makeStyles} from "@material-ui/core";
import Agility from "../Images/Jobs/Agility.webp"
import Brute from "../Images/Jobs/Brute.webp"
import Counter from "../Images/Jobs/Counter.webp"
import Demolition from "../Images/Jobs/Demolition.webp"
import Deception from "../Images/Jobs/Deception.webp"
import Engineer from "../Images/Jobs/Engineer.webp"
import Lockpick from "../Images/Jobs/Lockpick.webp"
import Perception from "../Images/Jobs/Perception.webp"
import Trap from "../Images/Jobs/Trap.webp"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { type: "Abyss", drops: "Abyss Jewels, Stygian Vise belts, Abyss Scarabs", 
        skills: ["Trap Disarmament"], icons: [Trap]},
    { type: "Armour", drops: "Armour, some of which may be veiled, fractured, 30% quality, influenced, enchanted, Incursion mod or unique. Armour related Divination Cards and Basic Currency usable with Armour",      
        skills: ["Agility", "Deception", "Trap Disarmament"], icons: [Agility, Deception, Trap]},
    { type: "Blight", drops: "Oils, Blighted Maps, Blight Scarabs", skills: [""], icons: []},
    { type: "Breach", drops: "Breach Splinters, Breach Rings, Breach Scarabs and rarely Breachstones or Empowered Breachstones", 
        skills: ["Trap Disarmament"], icons: [Trap]},
    { type: "Currency", drops: "Basic currency. Small chance for Harbinger related Exalted Shards and Ancient Shards.", 
        skills: ["Counter-Thaumaturgy", "Lockpicking", "Trap Disarmament"], icons: [Counter, Lockpick, Trap]},
    { type: "Delirium", drops: "Simulacrum Splinters, Cluster Jewels, Delirium orbs , Delirium Maps", 
        skills: ["Demolition"], icons: [Demolition]},
    { type: "Divination Cards", drops: "2-8 Stacked Decks, random Divination Cards", 
        skills: ["Deception", "Perception"], icons: [Deception, Perception]},
    { type: "Essences", drops: "Essences, small chance for high level Essences, Remnant of Corruption or Essence of Horror", 
        skills: ["Agility", "Engineering"], icons: [Agility, Engineer]},
    { type: "Fossils", drops: "Fossils, Resonators, Sulphite Scarabs", 
        skills: ["Agility", "Brute Force"], icons: [Agility, Brute]},
    { type: "Gems", drops: "Skill gems, which may have levels and quality. Does not contain Anomalous/Divergent/Awakened/Phantasmal gems", 
        skills: ["Counter-Thaumaturgy"], icons: [Counter]},
    { type: "Harbinger", drops: "Harbinger currency, Beachhead map, small chance for Ancient Orbs & Exalted Shards, Harbinger Scarabs", 
        skills: ["Agility", "Deception"], icons: [Agility, Deception]},
    { type: "Jewellery", drops: "Rings, Amulets, Jewels, Abyss Jewels and Belts, which may be veiled, fractured, or influenced. Jewellery related Divination Cards.", 
        skills: ["Counter-Thaumaturgy", "Lockpicking", "Perception"], icons: [Counter, Lockpick, Perception]},
    { type: "Legion", drops: "Legion Splinters, Incubators, Legion Scarabs", 
        skills: ["Trap Disarmament"], icons: [Trap]},
    { type: "Map Fragments", drops: "Scarabs, Sacrifice at Dusk/Dawn/Noon/Midnight, Offering to the Goddess, Small chance for valuable map fragments", 
        skills: ["Lockpicking"], icons: [Lockpick]},
    { type: "Maps", drops: "Maps of all Tiers, Basic Currency usable with Maps", 
        skills: ["Engineering"], icons: [Engineer]},
    { type: "Metamorph", drops: "Catalysts, Metamorph Scarabs", 
        skills: ["Demolition"], icons: [Demolition]},
    { type: "Random", drops: "Random items from other reward chests.	", 
        skills: ["Demolition", "Engineering", "Perception"], icons: [Demolition, Engineer, Perception]},
    { type: "Talismans", drops: "Talismans with Anoints", 
        skills: ["Trap Disarmament"], icons: [Trap]},
    { type: "Uniques", drops: "Unique items, Reliquary Scarabs.", 
        skills: ["Brute Force", "Engineering"], icons: [Brute, Engineer]},
    { type: "Weapons", drops: "Weapons, some of which may be veiled, fractured, 30% quality, influenced or unique. Weapon related Divination Cards and Basic Currency usable with Weapons", 
        skills: ["Brute Force", "Trap Disarmament"], icons: [Brute, Trap]},

]

function RewardTable() {

    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Rogues
            </Typography>
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Reward Type
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Drops
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Skill
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Skill Icon
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '25%'}}> {data.type} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.drops} </TableCell>
                            <TableCell style={{width: '25%'}}> 
                                {data.skills.map((skills) => (
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>
                                            {skills}
                                        </TableCell>
                                    </TableRow>
                                ))} 
                            </TableCell>
                            <TableCell style={{width: '25%'}}> 
                                {data.icons.map((icons) => (
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>
                                            <Box 
                                                component="img"
                                                src={`${icons}`}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))} 
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default RewardTable;