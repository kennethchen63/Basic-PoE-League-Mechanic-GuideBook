import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Gianna from "../Images/Rogues/Gianna.webp"
import Huck from "../Images/Rogues/Huck.webp"
import Isla from "../Images/Rogues/Isla.webp"
import Karst from "../Images/Rogues/Karst.png"
import Nenet from "../Images/Rogues/Nenet.png"
import Niles from "../Images/Rogues/Niles.webp"
import Tibbs from "../Images/Rogues/Tibbs.webp"
import Tullina from "../Images/Rogues/Tullina.png"
import Vinderi from "../Images/Rogues/Vinderi.webp"
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
    { portrait: Gianna, name: "Gianna, the Master of Disguise", perks: "(10-30)% reduced Blueprint Revealing Cost. Discovers a Blueprint Reveal upon completion of a Heist Contract Mission. Reveals blueprint details with a 20–40% discount.", 
        jobs: ["Deception 5", "Counter-Thaumaturgy 3", "Perception 2"], 
        icons: [Deception, Counter, Perception], 
        combat: "Lightning damage projectile, chance to shock. Physical damage projectile, chance to hinder"},
    { portrait: Huck, name: "Huck, the Soldier", perks: "Is a powerful Combatant and provides strong Buffs to Allies. Players have (10-20)% increased Experience gain.", 
        jobs: ["Lockpicking 3", "Brute Force 3", "Demolition 3", " Engineering 3"], 
        icons: [Lockpick, Brute, Demolition, Engineer ],
        combat: "Melee attacks, buffs allies"},
    { portrait: Isla, name: "Isla, the Engineer", perks: "(30-50)% increased time before Lockdown.", 
        jobs: ["Engineering 5", "Trap Disarmament 4"], 
        icons: [Engineer, Trap], 
        combat: "Bombs (fire damage spells)"},
    { portrait: Karst, name: "Karst, the Lockpick", perks: "(20-40)% less raising of Alert Level from opening Reward Chests.", 
        jobs: ["Lockpicking 5", "Perception 3", "Agility 2"], 
        icons: [Lockpick, Perception, Agility], 
        combat: "Projectile attacks"},
    { portrait: Nenet, name: "Nenet, the Scout", perks: "Can Scout nearby Enemy Patrols and Elite Patrols during Heists. (8-20)% less raising of Alert Level.", 
        jobs: ["Perception 5", "Counter-Thaumaturgy 4"], 
        icons: [Perception, Counter],
        combat: "Projectile attacks"},
    { portrait: Niles, name: "Niles, the Interrogator", perks: "Can unlock (1-2) Magical Chest after Lockdown per Wing. Discovers a Blueprint Reveal upon completion of a Heist Contract Mission. Reveals blueprint details with a 10% discount", 
        jobs: ["Counter-Thaumatury 5", "Deception 4"], 
        icons: [Counter, Deception], 
        combat: "Cold damage projectile, Cold damage cone, Mind control"},
    { portrait: Tibbs, name: "Tibbs, the Giant", perks: "Can unlock (1-2) Mechanical Chest after Lockdown per Wing.", 
        jobs: ["Brute Force 5", "Demolition 4"], 
        icons: [Brute, Demolition], 
        combat: "Melee attacks and can stun"},
    { portrait: Tullina, name: "Tullina, the Catburglar", perks: "(10-26)% chance to find additional Heist Targets from Secret Reward Rooms. (6-14)% less raising of Alert Level.", 
        jobs: ["Agility 5", "Lockpicking 3", "Trap Disarmament 2"], 
        icons: [Agility, Lockpick, Trap],
        combat: "Melee attacks, chance to poison"},
    { portrait: Vinderi, name: "Vinderi, the Dismantler", perks: "Heist Chests have a (6-14)% chance to Duplicate their contents. (14-30)% more raising of Alert Level.", 
        jobs: ["Demolition 5", "Trap Disarmament 5", "Engineering 2"], 
        icons: [Demolition, Trap, Engineer], 
        combat: "Melee attacks, fire damage"},
]

function RogueTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Portrait
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Rogue Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Heist Perks
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Jobs
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Job Icon
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Combat
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '15%'}}>
                            <Box 
                                component="img"
                                src={`${data.portrait}`}
                            />
                        </TableCell>
                        <TableCell style={{width: '15%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '25%'}}> {data.perks} </TableCell>
                        <TableCell style={{width: '15%'}}> 
                            {data.jobs.map((jobs) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {jobs}
                                    </TableCell>
                                </TableRow>
                            ))} 
                        </TableCell>
                        <TableCell style={{width: '15%'}}> 
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
                        <TableCell style={{width: '15%'}}> {data.combat} </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RogueTable;