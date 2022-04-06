import React from "react";
import { Grid, Box, makeStyles, Typography, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from "@material-ui/core";
import Tormentpic from '../images/Torment.png';

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: 950, 
        backgroundColor: 'gray', 
    },
}));

function createData(name, modifiers, touch, monster) {
    return { name, modifiers, touch, monster };
  }
  
  const rows = [
    createData("Alchemist",	"N/A",	"N/A",	"N/A"),
    createData("Arsonist",	"Periodically fires a series of three novas that deal fire damage",	"Gains extra fire damage and fire resistance.",	"Monster gains ability to cast a large firestorm that leaves burning ground over a wide area"),
    createData("Aurora Cultist",	"Leaves ice trail akin to Arctic Armor",	"Monsters deal additional cold damage",	"Casts Vaal Cold Snap"),
    createData("Betrayer", "N/A",   "N/A",  "Guaranteed veiled rare on death"),
    createData("Blasphemer",	"Hexfont",	"Random curse on hit",	"Random curse on hit, enemies can have 2 curses"),
    createData("Cannibal",	"Devours a nearby corpse to heal",	"Gains Corpse Devouring",	"Gains Corpse Devouring; periodically summons Cannibal's Devoted as adds (Cannibal from act 1)"),
    createData("Charlatan",	"Has Physical Degeneration Aura", "Has Allies regenerate life aura",	"All affected monsters apply a physical bleed effect on hit. Status icon is the same as the puncture icon",	"Causes puncture on hit. Summons Purged Fluids. (Mini Blood Elemental from Lunaris 3)"),
    createData("Cutthroat",	"Has 'Allies Deal Substantial Extra Physical Damage' aura",	"Monsters gain increased Attack, Cast and Movement speed",	"Gained 'Allies Deal Substantial Extra Physical Damage' and 'Allies Move and Attack Faster' auras"),
    createData("Embezzler",	"Embezzler Aura: Enemies recover Life, Mana and Energy Shield 50% slower. Summons Embezzler's Offers (Aurate Warriors) and Embezzler's Own (Aurate Archers)",	"Periodically summons Embezzler's Offers and Embezzler's Own",	"Drops a large amount of currency orbs on death"),
    createData("Illegal Fisherman",	"Very rare",	"Nothing special seems to happen",	"Nothing special seems to happen"),
    createData("Forger",	"Monsters seem to respawn as apparitions",	"Monsters gain Spell Echo",	"Periodically summons corpses and raises specters"),
    createData("Graverobber",	"Leaves sandstorms",	"N/A",	"Guaranteed league-specific unique on death"),
    createData("Martyr",	"Gains Frenzy Charges and casts Detonate Dead",	"Explodes on Death dealing Fire damage",	"Periodically summons Martyr's Devoted as adds (similar to Alira's Martyr from Western Forest)"),
    createData("Miner",		"N/A", "Frenzy as Damaged", "N/A"),	
    createData("Mutilator",	"Casts a Spectral Throw",	"Spawns Animated Weapon on death",	"Casts Vaal Spectral Throw"),
    createData("Necromancer",	"Summons Raging Spirits",	"Summons skeleton warrior on death",	"Summons several skeleton warriors"),
    createData("Poisoner",	"Leaves a trail of chaos damage", "Poison on hit",	"Periodically releases a large nova of peircing bolts that do chaos damage"),
    createData("Rogue",	"Increased movement speed, reduced Character Size",	"Quick, 20% reduced Character Size, 33% chance to Dodge Attacks",	"Quick, 20% reduced Character Size, 33% chance to Dodge Attacks, 33% chance to Dodge Spell Damage"),
    createData("Seditionist",	"N/A",	"Summons Tornadoes and monsters gain 'Silence curses' on hit",	"Guaranteed magic or rare map upon death Drops around 10-15 portal/wisdom scrolls "),
    createData("Shavronne",	"N/A",	"N/A",	"Casts Storm Call and Storm Bearers"),
    createData("Smuggler",	"Has 'Allies have increased energy shield' aura",	"N/A",	"Guaranteed unique on death"),
    createData("Spy",	"Leaves smoke cloud trail",	"Gains Blind on hit",	"Releases smoke clouds over a large area"),
    createData("Storm Cultist",	"Has a small 'Enemies are Shocked' aura around the ghost and resists lightning",	"Grants lightning resistance",	"Spawns areas of shocking ground nearby"),
    createData("Thief",	"Enemies cannot leech from you",	"Life and mana leech",	"Ends active potion effects and removes mana on hit. Increased jewelry drops"),
    createData("Thug",	"Grants increased life and character size",	"Grants increased life and character size",	"Grants increased life, character size, and area of effect"),
    createData("Vaal Cultist",	"Summons Vaal Constructs",	"Additional elemental damage",	"Randomly uses Vaal skills. Chance to drop a Vaal Fragment or Gem on death"),
    createData("Warlord",	"Casts Warlords Mark",	"Reduced Physical Damage taken",	"Generates Endurance charges and grants endurance charges to allies as well"),
  ];


function Torment() {

    const classes = useStyles();

    return (
        <div>     
            <Grid container>
                <Grid container xs={12} alignItems="center" justifyContent="center">
                    <Box className={classes.l_desc}>
                        <Typography align="center" variant="h2">
                            Torment
                        </Typography>
                        <Grid container alignItems="center" justifyContent="center">
                            <Box component="img" src={`${Tormentpic}`} align="center"/>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <Typography>
                                The Torment league mechanics introduces new tormented spirits that has special powers.
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <Typography>
                                These tormented spirits have the ability to roam around and inflict their powers onto nearby monsters.
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <Typography>
                                If it runs into a Rare monster, it can possess that monster making it inherit the powers and increasing its difficulty.
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <TableContainer style={{maxHeight: 555, backgroundColor: "white"}}component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell> 
                                            <Typography style={{ fontWeight: 800}}>
                                                Tormented Spirit Name
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography style={{ fontWeight: 800}}>
                                                Spirit Modifiers
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography style={{ fontWeight: 800}}>
                                                Spirit's Touch
                                            </Typography>       
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography style={{ fontWeight: 800}}>
                                            Possesed Monster Modifiers
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        >
                                        <TableCell style={{width: '25%'}}> {row.name} </TableCell>
                                        <TableCell style={{width: '25%'}}align="left">{row.modifiers}</TableCell>
                                        <TableCell style={{width: '25%'}}align="left">{row.touch}</TableCell>
                                        <TableCell style={{width: '25%'}}align="left">{row.monster}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Torment;