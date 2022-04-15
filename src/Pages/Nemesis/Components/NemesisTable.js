import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
   { name: "Ancestral Power", modifiers: "Randomly casts Searing Bond totems, with instant cast speed. (Totem limit is 4)" },
   { name: "Benevolent Guardian", modifiers: "Periodically applies the Immunity buff to nearby monsters, which makes them immune to damage. Killing the monster with Benevolent Guardians removes Immunity." },
   { name: "Berserker/Berserker Fury", modifiers: "On low life, switches to Berserker Fury, where it gains increased character size, attack and cast speed, reduced damage taken, and becomes quicker" },
   { name: "Blessing of Elements", modifiers: "Gains bonus damage of a random element based on Physical Damage and hits always chills/ignites/shocks on hit. Gains 50% of Physical Damage as Extra Damage of a random Element. Always cause Elemental Status Ailments (Hidden)" },
   { name: "Bringer of Bones", modifiers: "Passively casts Summon Skeletons with instant cast speed. Skeletons will not decay over time like regular ones." },
   { name: "Bringer of Fragility", modifiers: "Curses targets with Vulnerability on hit." },
   { name: "Bringer of Weakness", modifiers: "Curses targets with Enfeeble on hit." },
   { name: "Chronophage", modifiers: "Curses targets withTemporal Chains on hit." },
   { name: "Corrupting Blood", modifiers: "When hit, applies Corrupted Blood to the attacker. Corrupted Blood is a debuff that inflicts physical damage over time and stacks up to 10 times." },
   { name: "Elemental Thorns", modifiers: "When hit by elemental damage, it launches a bolt at the attacker's position that deals fixed amount of elemental damage in an AoE. Has a cooldown between each shot." },
   { name: "Final Gasp", modifiers: "When the monster dies, it leaves behind an invincible copy that disappears after a few seconds. The copy also fires a nova of dark projectiles periodically. Monster does not leave a corpse and cannot be converted." },
   { name: "Fractured", modifiers: "Splits into 8–12 normal version of the same monster upon death." },
   { name: "Hexfont", modifiers: "Casts random curses every half second, with instant cast speed including one that can silence player (prevents the ability to cast spells)." },
   { name: "Inferno Bolt", modifiers: "Periodically charges up and launches a large fireball that deals fire damage." },
   { name: "Inner Treasure", modifiers: "Guarnatees a random unique item on death." },
   { name: "Light Bolt", modifiers: "Periodically fires a row of projectiles that deals physical damage." },
   { name: "Lightning Mirage", modifiers: "When hit, creates a mirage at their spot which slowly chase after the player. On contact, it detonates itself to deal lightning damage. Mirages will expire after a few seconds. Plays a distinct sound when a mirage spawns." },
   { name: "Nullifier", modifiers: "Removes charges and flask effects on hit." },
   { name: "Proximity Shield", modifiers: "Can only be damaged by hits originating from inside the shield." },
   { name: "Physical Thorns", modifiers: "When hit by physical damage, it launches a bolt at the attacker's position that deals the reflected physical damage in an AoE. Has a cooldown between each shot." },
   { name: "Shroud Walker", modifiers: "Periodically teleports to you via Smoke Mine. Constantly creates a smoke cloud around itself." },
   { name: "Snow Bolt", modifiers: "Periodically fires a bolt at the ground which explodes for cold damage after a delay." },
   { name: "Soul Conduit", modifiers: "Resurrects itself and all corpses around it upon death, except for Soul Conduit, which is replaced by Apparition. Monster does not leave a corpse and cannot be converted." },
   { name: "Soul Eater", modifiers: "Consumes souls of other nearby monsters upon their death to become stronger. Each soul grants 5% increased attack and cast speed, 5% damage reduction, 1% increased character size, and increases the power of their other affixes." },
   { name: "Storm Herald", modifiers: "Casts Lightning Storm over the target continuously with a short delay. Multiple Lightning Storms can overlap creating a high risk area." },
   { name: "Vile Touch", modifiers: "Applies poison on hit." },
   { name: "Vine Snare", modifiers: "When hit, it applies a charge of vines to the attacker, reducing movement speed. Vines are gradually removed by moving." },
   { name: "Volatile Flameblood", modifiers: "On death, spawns a volatile core that chases the player. When touched, it stops briefly then explodes dealing fire damage in an area. The base damage of the explosion is equal to the total attack damage of the monster. A distinct sound can be heard when a volatile core spawns."},
]

function NemesisTable() {

    const classes = useStyles();
    return(
        <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Nemesis Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Nemesis Modifier
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

export default NemesisTable;