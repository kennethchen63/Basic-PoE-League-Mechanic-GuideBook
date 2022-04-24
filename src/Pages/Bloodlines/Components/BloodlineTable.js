import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, } from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Bearers of the Guardian", modifiers: "Every mob slowly builds an animated guardian that can't be killed until the entire pack has been cleared."},
    {name: "Corrupted Bloodline", modifiers: "When killed, applies Corrupted Blood to the attacker. Corrupted Blood is a debuff that inflicts physical damage over time and stacks up to 10 times."},
    {name: "Flame/Frost/Storm Bearers", modifiers: "On death, each monster starts a storm-call-like bomb of their element."},
    {name: "Flaring/Rime/Static Pulseblood", modifiers: "A beam pulses between the mobs in the pack, if you are hit by it, it deals damage of the element."},
    {name: "Heralds of the Obelisk", modifiers: "Each corpse leaves an unkillable Obelisk that casts a random lightning spell. The obelisks disappear once the entire pack is killed."},
    {name: "Keepers of the Trove", modifiers: "Each monster drops a rare item of the same type."},
    {name: "Legacy of Vigour", modifiers: "Each monster killed grants a Vigour charge to the rest of the pack, granting move speed and attack speed, similar to Frenzy charges, but stronger."},
    {name: "Legacy of Zeal	", modifiers: "Each monster killed grants a Zeal charge to the rest of the pack, granting them more damage reduction and Damage."},
    {name: "Living Blood", modifiers: "When all the monsters die, a Congealing Blood or Congealing Mud elemental is summoned. These new monsters have different abilities depending on difficulty and level of zone."},
    {name: "Mark of Cannibalism", modifiers: "Monsters can regain health from each other's corpses."},
    {name: "Order of the Frozen Sky	", modifiers: "Monsters use Icestorm."},
    {name: "Otherworldly", modifiers: "Monsters randomly cast a purple fog on them that lasts a couple of seconds, granting extra chaos damage and massive defenses."},
    {name: "Shared Boon", modifiers: "Monsters generate all types of charges on hit and share them with each other"},
    {name: "Shrouded", modifiers: "	Monsters are surrounded by fog and information about the monster (affixes, type) is hidden."},
    {name: "Spirit Walkers", modifiers: "Each mob has an apparition of themselves, doubling the size of the pack. The appartions also grant experience when killed."},
    {name: "Union of Souls", modifiers: "When killed, passes a buff to all remaining mobs that increases size and gives them more life."},
    {name: "Voidspawn of Abaxoth", modifiers: "Summons a unique Beyond Demon when the entire pack is killed."},
]

function BloodlineTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Bloodline Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Bloodline Modifier
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '50%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '50%'}}align="left">{data.modifiers}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BloodlineTable;