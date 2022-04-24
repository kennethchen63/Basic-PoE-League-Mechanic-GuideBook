import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Abyss from "../Images/Rewards/Abyss.webp";
import Armour from "../Images/Rewards/Armour.webp";
import Blight from "../Images/Rewards/Blight.webp";
import Breach from "../Images/Rewards/Breach.webp";
import Currency from "../Images/Rewards/Currency.webp";
import Delirium from "../Images/Rewards/None.png";
import Divination from "../Images/Rewards/Divination.webp";
import Essence from "../Images/Rewards/Essence.webp";
import Fossils from "../Images/Rewards/Fossils.webp";
import Frag from "../Images/Rewards/Frag.webp";
import Gems from "../Images/Rewards/Gems.webp";
import Harbinger from "../Images/Rewards/Harbinger.webp";
import Jewellery from "../Images/Rewards/Jewellery.webp";
import Lab from "../Images/Rewards/Lab.webp";
import Legion from "../Images/Rewards/None.png";
import Maps from "../Images/Rewards/Maps.webp";
import Metamorph from "../Images/Rewards/None.png";
import Random from "../Images/Rewards/Random.webp";
import Scarab from "../Images/Rewards/Scarab.webp";
import Talisman from "../Images/Rewards/Talisman.webp";
import Uniques from "../Images/Rewards/Uniques.webp";
import Weapons from "../Images/Rewards/Weapons.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {type: "Abyss", image: Abyss, drops: "Abyss Jewels, Stygian Vise belts"},
    {type: "Armour", image: Armour, drops: "Armour, some of which may be veiled, fractured, 30 quality, or influenced."},
    {type: "Blight", image: Blight, drops: "Oils, small chance for rare oils like Silver Oil, Golden Oil and Blighted Maps."},
    {type: "Breach", image: Breach, drops: "Breach Splinters, rarely Breachstones"},
    {type: "Currency", image: Currency, drops: "Common currency, can contain Chaos Orbs Small chance for Exalted Orbs, Exalted Shards, Ancient Shards, Divine Orbs."},
    {type: "Delirium", image: Delirium, drops: "Simulacrum Splinters, Cluster Jewels, Delirium orbs."},
    {type: "Divination Cards", image: Divination, drops: "0-4 Stacked Decks, Random cards."},
    {type: "Essences", image: Essence, drops: "Any Essence"},
    {type: "Fossils", image: Fossils, drops: "Fossils, Resonators."},
    {type: "Fragments", image: Frag, drops: "Scarabs, Sacrifice at Dusk/Dawn/Noon/Midnight, Offering to the Goddess, Small chance for Uber Atziri fragments."},
    {type: "Gems", image: Gems, drops: "Any skill gems, sometimes have levels and quality."},
    {type: "Harbinger", image: Harbinger, drops: "Harbinger's Orbs, Beachhead map, Small chance for Ancient Orbs & Exalted Shards."},
    {type: "Jewellery", image: Jewellery, drops: "Rings, Amulets, Jewels, Abyss Jewels and Belts, which may be veiled, fractured, or influenced."},
    {type: "Labyrinth", image: Lab, drops: "Offering of the Goddess, random enchanted Rare items."},
    {type: "Legion", image: Legion, drops: "Legion Splinters and Incubators"},
    {type: "Maps", image: Maps, drops: "T1-T16 maps."},
    {type: "Metamorph", image: Metamorph, drops: "Random Catalysts."},
    {type: "Random", image: Random, drops: "Random assortment of items including armour, weapons and common currency."},
    {type: "Scarab", image: Scarab, drops: "Scarabs"},
    {type: "Talismans", image: Talisman, drops: "Random Talismans"},
    {type: "Uniques", image: Uniques, drops: "Random Uniques."},
    {type: "Weapons", image: Weapons, drops: "Weapons, some of which may be veiled, fractured, 30 quality, or influenced."},
]

function RewardTable() {

    const classes = useStyles();

    return (
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
                                Reward Image
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Typical Rewards
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '33%'}}> {data.type} </TableCell>
                        <TableCell style={{width: '33%'}}>
                            <Box 
                                component="img"
                                src={`${data.image}`}
                            />
                        </TableCell>
                        <TableCell style={{width: '33%'}}> {data.drops} </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RewardTable;