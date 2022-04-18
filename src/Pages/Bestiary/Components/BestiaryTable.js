import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles } from "@material-ui/core";
import SaqawineRhoa from "../Images/Beasts/SaqawineRhoa.png";
import CraicicShieldCrab from "../Images/Beasts/CraicicShieldCrab.png";
import CraicicSandSpitter from "../Images/Beasts/CraicicSandSpitter.png";
import CraicicSavageCrab from "../Images/Beasts/CraicicSavageCrab.png";
import FarricFlameHellionAlpha from "../Images/Beasts/FarricFlameHellionAlpha.png";
import FarricChieftain from "../Images/Beasts/FarricChieftain.png";
import FarricApe from "../Images/Beasts/FarricApe.png";
import FarricGoatman from "../Images/Beasts/FarricGoatman.png";
import FarricGargantuan from "../Images/Beasts/FarricGargantuan.png";
import FarricUrsa from "../Images/Beasts/FarricUrsa.png";
import SaqawineRetch from "../Images/Beasts/SaqawineRetch.png";
import FenumalWidow from "../Images/Beasts/FenumalWidow.png";
import CraicicSquid from "../Images/Beasts/CraicicSquid.png";
import CraicicWatcher from "../Images/Beasts/CraicicWatcher.png";
import SaqawineCobra from "../Images/Beasts/SaqawineCobra.png";
import FenumalDevourer from "../Images/Beasts/FenumalDevourer.png";
import SaqawineBloodViper from "../Images/Beasts/SaqawineBloodViper.png";
import FenumalQueen from "../Images/Beasts/FenumalQueen.png";
import FarricGoliath from "../Images/Beasts/FarricGoliath.png";
import FenumalScrabbler from "../Images/Beasts/FenumalScrabbler.png";
import FarricTaurus from "../Images/Beasts/FarricTaurus.png";
import FarricMagmaHound from "../Images/Beasts/FarricMagmaHound.png";
import FarricPitHound from "../Images/Beasts/FarricPitHound.png";
import SaqawineVulture from "../Images/Beasts/SaqawineVulture.png";
import SaqawineChimeral from "../Images/Beasts/SaqawineChimeral.png";
import CraicicChimeral from "../Images/Beasts/CraicicChimeral.png";
import CraicicVassal from "../Images/Beasts/CraicicVassal.png";
import FarricFrostHellionAlpha from "../Images/Beasts/FarricFrostHellionAlpha.png";
import FarricLynxAlpha from "../Images/Beasts/FarricLynxAlpha.png";
import FarricWolfAlpha from "../Images/Beasts/FarricWolfAlpha.png";
import FenumalPlaguedArachnid from "../Images/Beasts/FenumalPlaguedArachnid.png";
import FenumalScorpion from "../Images/Beasts/FenumalScorpion.png";
import Any from "../Images/Beasts/Any.png";
import FarricTigerAlpha from "../Images/Beasts/FarricTigerAlpha.png";
import SaqawineRhex from "../Images/Beasts/SaqawineRhex.png";
import FenumalHybridArachnid from "../Images/Beasts/FenumalHybridArachnid.png";
import CraicicSpiderCrab from "../Images/Beasts/CraicicSpiderCrab.png";
import Farrul from "../Images/Beasts/Farrul.png";
import Saqawal from "../Images/Beasts/Saqawal.png";
import Fenumus from "../Images/Beasts/Fenumus.png";
import Craiceann from "../Images/Beasts/Craiceann.png";
import CraicicMaw from "../Images/Beasts/CraicicMaw.png";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {craft: "8 Chromatic Orbs", notes: "None", beasts: ["Saqawine Rhoa"], image: [SaqawineRhoa]},
    {craft: "4 Jeweller's Orbs", notes: "None", beasts: ["Craicic Shield Crab"], image: [CraicicShieldCrab]},
    {craft: "Orb of Fusing", notes: "None", beasts: ["Craicic Sand Spitter"], image: [CraicicSandSpitter]},
    {craft: "Random Unique Item", notes: "None", beasts: ["Craicic Savage Crab"], image: [CraicicSavageCrab]},
    {craft: "Random Unique Ring", notes: "None", beasts: ["Farric Flame Hellion Alpha"], image: [FarricFlameHellionAlpha]},
    {craft: "Random Unique Amulet", notes: "None", beasts: ["Farric Chieftain"], image: [FarricChieftain]},
    {craft: "Random Unique Belt", notes: "None", beasts: ["Farric Ape"], image: [FarricApe]},
    {craft: "Random Unique Flask", notes: "None", beasts: ["Farric Goatman"], image: [FarricGoatman]},
    {craft: "Random Unique Helmet", notes: "None", beasts: ["Farric Gargantuan"], image: [FarricGargantuan]},
    {craft: "Random Unique Body Armour", notes: "None", beasts: ["Farric Ursa"], image: [FarricUrsa]},
    {craft: "Random Unique Boots", notes: "None", beasts: ["Saqawine Retch"], image: [SaqawineRetch]},
    {craft: "Random Unique Gloves", notes: "None", beasts: ["Fenumal Widow"], image: [FenumalWidow]},
    {craft: "Random Unique Jewel", notes: "None", beasts: ["Craicic Squid"], image: [CraicicSquid]},
    {craft: "Random Unique Claw/Dagger", notes: "None", beasts: ["Craicic Watcher"], image: [CraicicWatcher]},
    {craft: "Random Unique Mace/Sceptre", notes: "None", beasts: ["Saqawine Cobra"], image: [SaqawineCobra]},
    {craft: "Random Unique Shield/Quiver", notes: "None", beasts: ["Fenumal Devourer"], image: [FenumalDevourer]},
    {craft: "Random Unique Staff", notes: "None", beasts: ["Saqawine Blood Viper"], image: [SaqawineBloodViper]},
    {craft: "Random Unique Bow", notes: "None", beasts: ["Farric Goliath"], image: [FarricGoliath]},
    {craft: "Random Unique Wand", notes: "None", beasts: ["Fenumal Scrabbler"], image: [FenumalScrabbler]},
    {craft: "Random Unique Map", notes: "None", beasts: ["Farric Taurus"], image: [FarricTaurus]},
    {craft: "23% Quality Corrupted Gem", notes: "None", beasts: ["Farric Magma Hound"], image: [FarricMagmaHound]},
    {craft: "Level 21 Corrupted Gem", notes: "None", beasts: ["Farric Pit Hound"], image: [FarricPitHound]},
    {craft: "6-socket Rare", notes: "None", beasts: ["Saqawine Vulture"], image: [SaqawineVulture]},
    {craft: "10 Stack Random Currency", notes: "None", beasts: ["Saqawine Chimeral"], image: [SaqawineChimeral]},
    {craft: "Magic Item Imprint", notes: "None", beasts: ["Craicic Chimeral"], image: [CraicicChimeral]},
    {craft: "Corrupt an item for 30% Quality", notes: "Armour/Weapons (Cannot brick)", beasts: ["Craicic Vassal"], image: [CraicicVassal]},
    {craft: "Reroll Implicit and Explicit Modifier Values of a Rare Item", notes: "Blessed Orb and Divine Orb", beasts: ["Farric Frost Hellion Alpha"], image: [FarricFrostHellionAlpha]},
    {craft: "Add Suffix/Remove Random Prefix", notes: "Rare Items Only", beasts: ["Farric Lynx Alpha"], image: [FarricLynxAlpha]},
    {craft: "Add Prefix/Remove Random Suffix", notes: "Rare Items Only", beasts: ["Farric Wolf Alpha"], image: [FarricWolfAlpha]},
    {craft: "Split an Item into 2 with Half the Modifiers on Each Item", notes: "Does not work on Influenced/Split Items, Keeps Catalyst Quality on Both", beasts: ["Fenumal Plagued Arachnid"], image: [FenumalPlaguedArachnid]},
    {craft: "of Convection (Life/Mana Flask): Adds Chill/Freeze Immunity if Used while Chilled/Frozen", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of Damping (Life/Mana Flask): Adds Ignite Immunity if Used while Ignited. Removes all Burning when used.", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of Sealing (Life/Mana Flask): Adds Bleed Immunity if Used while Bleeding. Adds Corrupted Blood Immunity if used while affected by Corrupted Blood.", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of Earthing (Life/Mana Flask): Adds Shock Immunity if Used while Shocked.", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of Antitoxin (Life/Mana Flask): Adds Poison Immunity if Used while Poisoned.", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of Warding (Life/Mana Flask): Removes Curses on Use", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of the Lizard (Utility Flask): Less Duration, Immunity to Bleed/Corrupted Blood during Flask Effect", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of the Skunk (Utility Flask): Less Duration, Immunity to Poison during Flask Effect", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of the Conger (Utility Flask): Less Duration, Immunity to Shock during Flask Effect", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of the Deer (Utility Flask): Less Duration, Immunity to Freeze/Chill during Flask Effect", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "of the Urchin (Utility Flask): Less Duration, Immunity to Ignite during Flask Effect. Removes Burning on Use", notes: "Requires Flask to have no Suffix", beasts: ["Any Rare Lvl 20+ Beast"], image: [Any]},
    {craft: "Opens a Portal to Farrul's Den", notes: "Unique Farrul Item (Cat Boss)", beasts: ["Farric Tiger Alpha"], image: [FarricTigerAlpha]},
    {craft: "Opens a Portal to Saqawal's Roost", notes: "Unique Saqawal Item (Bird Boss)", beasts: ["Saqawine Rhex"], image: [SaqawineRhex]},
    {craft: "Opens a Portal to Fenumus' Lair", notes: "Unique Fenumus Item (Spider Boss)", beasts: ["Fenumal Hybrid Arachnid"], image: [FenumalHybridArachnid]},
    {craft: "Opens a Portal to Craiceann's Cove", notes: "Unique Craiceann Item (Crab Boss", beasts: ["Craicic Spider Crab"], image: [CraicicSpiderCrab]},
    {craft: "Crafts Aspect of the Cat on an Item", notes: "Requires Open Suffix", beasts: ["Farrul"], image: [Farrul]},
    {craft: "Crafts Aspect of the Avian on an Item", notes: "Requires Open Suffix", beasts: ["Saqawal"], image: [Saqawal]},
    {craft: "Crafts Aspect of the Spider on an Item", notes: "Requires Open Suffix", beasts: ["Fenumus"], image: [Fenumus]},
    {craft: "Crafts Aspect of the Crab on an Item", notes: "Requires Open Suffix", beasts: ["Craiceann"], image: [Craiceann]},
    {craft: "Adds a Mod to a Shaper Item", notes: "None", beasts: ["Fenumal Devourer, Craicic Maw"], image: [FenumalDevourer, CraicicMaw]},
    {craft: "Adds a Mod to a Elder Item", notes: "None", beasts: ["Saqawine Blood Viper, Craicic Maw"], image: [SaqawineBloodViper, CraicicMaw]},
    {craft: "Adds a Mod to a Redeemer Item", notes: "None", beasts: ["Fenumal Queen, Craicic Maw"], image: [FenumalQueen, CraicicMaw]},
    {craft: "Adds a Mod to a Hunter Item", notes: "None", beasts: ["Craicic Watcher, Craicic Maw"], image: [CraicicWatcher, CraicicMaw]},
    {craft: "Adds a Mod to a Crusader Item", notes: "None", beasts: ["Farric Goliath, Craicic Maw"], image: [FarricGoliath, CraicicMaw]},
    {craft: "Adds a Mod to a Warlord Item", notes: "None", beasts: ["Fenumal Scrabbler, Craicic Maw"], image: [FenumalScrabbler, CraicicMaw]},
    {craft: "Double Corrupts a Map", notes: "None", beasts: ["Craicic Vassal, Fenumal Scorpion"], image: [CraicicVassal, FenumalScorpion]},
    {craft: "Add a Mod to a Rare Map", notes: "Rare Maps Only", beasts: ["Craicic Savage Crab, Fenumal Scorpion"], image: [CraicicSavageCrab, SaqawineCobra]},
    {craft: "2 Orbs of Binding", notes: "None", beasts: ["Craicic Sand Spitter, Craicic Shield Crab"], image: [CraicicSandSpitter, CraicicShieldCrab]},
    {craft: "3 Orbs of Horizons", notes: "None", beasts: ["Farric Forst Hellion Alpha, Farric Gargantuan"], image: [FarricFrostHellionAlpha, FarricGargantuan]},
]

function BestiaryTable() {

    const classes = useStyles();

    return (
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Craft
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Notes
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Beasts Required
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Beasts Image
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '25%'}}> {data.craft} </TableCell>
                        <TableCell style={{width: '25%'}}align="left">{data.notes}</TableCell>
                        <TableCell style={{width: '25%'}}align="left">
                            {data.beasts.map((beasts) => (
                                <TableCell style={{borderBottom: "none"}}>
                                    {beasts}
                                </TableCell>
                            ))} 
                        </TableCell>
                        <TableCell style={{width: '25%'}}align="left">
                            {data.image.map((image) => (
                                <TableCell style={{borderBottom: "none"}}>
                                    <Box 
                                        component="img"
                                        src={`${image}`}
                                    />
                                </TableCell>
                            ))} 
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BestiaryTable;