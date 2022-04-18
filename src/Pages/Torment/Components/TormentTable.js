import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Paper,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { name: "Alchemist", modifiers: "N/A", touch: "N/A", monster: "N/A"},
    { name: "Arsonist", modifiers: "Periodically fires a series of three novas that deal fire damage", touch: "Gains extra fire damage and fire resistance.", monster: "Monster gains ability to cast a large firestorm that leaves burning ground over a wide area"},
    { name: "Aurora Cultist", modifiers: "Leaves ice trail akin to Arctic Armor", touch: "Monsters deal additional cold damage", monster: "Casts Vaal Cold Snap"},
    { name: "Betrayer", modifiers: "N/A", touch: "N/A", monster: "Guaranteed veiled rare on death"},
    { name: "Blasphemer", modifiers: "Hexfont", touch: "Random curse on hit", monster: "Random curse on hit, enemies can have 2 curses"},
    { name: "Cannibal", modifiers: "Devours a nearby corpse to heal", touch: "Gains Corpse Devouring", monster: "Gains Corpse Devouring; periodically summons Cannibal's Devoted as adds (Cannibal from act 1)"},
    { name: "Charlatan", modifiers: "Has Physical Degeneration Aura and Allies regenerate life aura", touch: "All affected monsters apply a physical bleed effect on hit. ", monster: "Causes puncture on hit. Summons Purged Fluids. (Mini Blood Elemental from Lunaris 3)",	},
    { name: "Cutthroat", modifiers: "Has 'Allies Deal Substantial Extra Physical Damage' aura", touch: "Monsters gain increased Attack, Cast and Movement speed", monster: "Gained 'Allies Deal Substantial Extra Physical Damage' and 'Allies Move and Attack Faster' auras"},
    { name: "Embezzler", modifiers: "Embezzler Aura: Enemies recover Life, Mana and Energy Shield 50% slower. Summons Embezzler's Offers (Aurate Warriors) and Embezzler's Own (Aurate Archers)", touch: "Periodically summons Embezzler's Offers and Embezzler's Own", monster: "Drops a large amount of currency orbs on death"},
    { name: "Illegal Fisherman", modifiers: "Very Rare", touch: "N/A", monster: "N/A"},
    { name: "Forger", modifiers: "Monsters seem to respawn as apparitions", touch: "Monsters gain Spell Echo", monster: "Periodically summons corpses and raises specters"},
    { name: "Graverobber", modifiers: "Leaves sandstorms", touch: "N/A", monster: "Guaranteed league-specific unique on death"},
    { name: "Martyr", modifiers: "Gains Frenzy Charges and casts Detonate Dead", touch: "Explodes on Death dealing Fire damage", monster: "Periodically summons Martyr's Devoted as adds (similar to Alira's Martyr from Western Forest)"},
    { name: "Miner", modifiers: "N/A", touch: "Frenzy as Damaged", monster: "N/A"},
    { name: "Mutilator", modifiers: "Casts a Spectral Throw", touch: "Spawns Animated Weapon on death", monster: "Casts Vaal Spectral Throw"},
    { name: "Necromancer", modifiers: "Summons Raging Spirits", touch: "Summons skeleton warrior on death", monster: "Summons several skeleton warriors"},
    { name: "Poisoner", modifiers: "Leaves a trail of chaos damage", touch: "Poison on hit", monster: "Periodically releases a large nova of peircing bolts that do chaos damage"},
    { name: "Rogue", modifiers: "Increased movement speed, reduced Character Size", touch: "Quick, 20% reduced Character Size, 33% chance to Dodge Attacks", monster: "Quick, 20% reduced Character Size, 33% chance to Dodge Attacks, 33% chance to Dodge Spell Damage"},
    { name: "Seditionist", modifiers: "N/A", touch: "Summons Tornadoes and monsters gain 'Silence curses' on hit", monster: "Guaranteed magic or rare map upon death, drops around 10-15 portal/wisdom scrolls"},
    { name: "Shavronne", modifiers: "N/A", touch: "N/A", monster: "Casts Storm Call and Storm Bearers"},
    { name: "Smuggler", modifiers: "Has 'Allies have increased energy shield' aura", touch: "N/A", monster: "Guaranteed unique on death"},
    { name: "Spy", modifiers: "Leaves smoke cloud trail", touch: "Gains Blind on hit", monster: "Releases smoke clouds over a large area"},
    { name: "Storm Cultist", modifiers: "Has a small 'Enemies are Shocked' aura around the ghost and resists lightning", touch: "Grants lightning resistance", monster: "Spawns areas of shocking ground nearby"},
    { name: "Thief", modifiers: "Enemies cannot leech from you", touch: "Life and mana leech", monster: "Ends active potion effects and removes mana on hit. Increased jewelry drops"},
    { name: "Thug", modifiers: "Grants increased life and character size", touch: "Grants increased life and character size", monster: "Grants increased life, character size, and area of effect"},
    { name: "Vaal Cultist", modifiers: "Summons Vaal Constructs", touch: "Additional elemental damage", monster: "Randomly uses Vaal skills. Chance to drop a Vaal Fragment or Gem on death"},
    { name: "Warlord", modifiers: "Casts Warlords Mark", touch: "Reduced Physical Damage taken", monster: "Generates Endurance charges and grants endurance charges to allies as well"},
]

function TormentTable() {

    const classes = useStyles();

    return (
        <TableContainer style={{backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Tormented Spirit Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Spirit Modifiers
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Spirit's Touch
                            </Typography>       
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                            Possesed Monster Modifiers
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '25%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '25%'}}align="left">{data.modifiers}</TableCell>
                        <TableCell style={{width: '25%'}}align="left">{data.touch}</TableCell>
                        <TableCell style={{width: '25%'}}align="left">{data.monster}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TormentTable;