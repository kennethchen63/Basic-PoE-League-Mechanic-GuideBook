import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Paper,
    Grid,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Greed", tier: "1-7 (Whispering-Deafening)", mlvl: "1-47", theme: "Life"},
    {name: "Contempt", tier: "1-7 (Whispering-Deafening)", mlvl: "1-47", theme: "Physical"},
    {name: "Hatred", tier: "1-7 (Whispering-Deafening)", mlvl: "1-47", theme: "Cold"},
    {name: "Woe", tier: "1-7 (Whispering-Deafening)", mlvl: "1-47", theme: "Energy Shield"},
    {name: "Fear", tier: "2-7 (Muttering-Deafening)", mlvl: "12-67", theme: "Minion"},
    {name: "Anger", tier: "2-7 (Muttering-Deafening)", mlvl: "12-67", theme: "Fire"},
    {name: "Torment", tier: "2-7 (Muttering-Deafening)", mlvl: "12-67", theme: "Lightning to Spells"},
    {name: "Sorrow", tier: "2-7 (Muttering-Deafening)", mlvl: "12-67", theme: "Dexterity"},
    {name: "Rage", tier: "3-7 (Weeping-Deafening)", mlvl: "30+", theme: "Strength"},
    {name: "Suffering", tier: "3-7 (Weeping-Deafening)", mlvl: "30+", theme: "Cold to Spells"},
    {name: "Wrath", tier: "3-7 (Weeping-Deafening)", mlvl: "30+", theme: "Lightning"},
    {name: "Doubt", tier: "3-7 (Weeping-Deafening)", mlvl: "30+", theme: "Evasion/Accuracy"},
    {name: "Loathing", tier: "4-7 (Wailing-Deafening)", mlvl: "48+", theme: "Critical Chance"},
    {name: "Zeal", tier: "4-7 (Wailing-Deafening)", mlvl: "48+", theme: "Speed"},
    {name: "Anguish", tier: "4-7 (Wailing-Deafening)", mlvl: "48+", theme: "Fire to Spells"},
    {name: "Spite", tier: "4-7 (Wailing-Deafening)", mlvl: "48+", theme: "Intelligence"},
    {name: "Scorn", tier: "5-7 (Screaming-Deafening)", mlvl: "68+", theme: "Critical Multiplier"},
    {name: "Envy", tier: "5-7 (Screaming-Deafening)", mlvl: "68+", theme: "Chaos"},
    {name: "Misery", tier: "5-7 (Screaming-Deafening)", mlvl: "68+", theme: "Cast Speed/Mana"},
    {name: "Dread", tier: "5-7 (Screaming-Deafening)", mlvl: "68", theme: "Bow Gem/Armour"},
    {name: "Insanity", tier: "8", mlvl: "N/A", theme: "Rare, obtained only by corrupting Scorn/Envy/Misery/Dread"},
    {name: "Horror", tier: "8", mlvl: "N/A", theme: "Rare, obtained only by corrupting Scorn/Envy/Misery/Dread"},
    {name: "Delirium", tier: "8", mlvl: "N/A", theme: "Rare, obtained only by corrupting Scorn/Envy/Misery/Dreadr"},
    {name: "Hysteria", tier: "8", mlvl: "N/A", theme: "Rare, obtained only by corrupting Scorn/Envy/Misery/Dread"},
]


function EssenceTable() {

    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Essence Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Essence Tiers
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Minimum Level
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Theme
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '25%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.tier} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.mlvl} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.theme} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default EssenceTable;