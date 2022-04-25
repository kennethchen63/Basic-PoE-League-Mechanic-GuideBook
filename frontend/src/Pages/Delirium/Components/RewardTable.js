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
    Box,
} from "@mui/material";
import {makeStyles} from '@mui/styles';
import Abyss from "../Images/Rewards/Abyss.webp"
import Armour from "../Images/Rewards/Armour.webp"
import Blight from "../Images/Rewards/Blight.webp"
import Breach from "../Images/Rewards/Breach.webp"
import Catalyst from "../Images/Rewards/Catalyst.webp"
import Currency from "../Images/Rewards/Currency.webp"
import Div from "../Images/Rewards/Div.webp"
import Essence from "../Images/Rewards/Essence.webp"
import Fossil from "../Images/Rewards/Fossil.webp"
import Harbinger from "../Images/Rewards/Harbinger.webp"
import Incubator from "../Images/Rewards/Incubator.webp"
import Jewel from "../Images/Rewards/Jewellery.webp"
import Lab from "../Images/Rewards/Lab.webp"
import Frag from "../Images/Rewards/Frag.webp"
import Map from "../Images/Rewards/Map.webp"
import Misc from "../Images/Rewards/Misc.webp"
import Scarab from "../Images/Rewards/Scarab.webp"
import Gem from "../Images/Rewards/Gem.webp"
import Talisman from "../Images/Rewards/Talisman.webp"
import Unique from "../Images/Rewards/Unique.webp"
import Weapon from "../Images/Rewards/Weapon.webp"
import AbyssOrb from "../Images/Orbs/AbyssOrb.webp"
import ArmourOrb from "../Images/Orbs/ArmourOrb.webp"
import BlightOrb from "../Images/Orbs/BlightOrb.webp"
import BreachOrb from "../Images/Orbs/BreachOrb.webp"
import CatalystOrb from "../Images/Orbs/CatalystOrb.webp"
import CurrencyOrb from "../Images/Orbs/CurrencyOrb.webp"
import CardOrb from "../Images/Orbs/CardOrb.webp"
import EssenceOrb from "../Images/Orbs/EssenceOrb.webp"
import FossilOrb from "../Images/Orbs/FossilOrb.webp"
import HarbOrb from "../Images/Orbs/HarbOrb.webp"
import LegionOrb from "../Images/Orbs/LegionOrb.webp"
import JewelOrb from "../Images/Orbs/JewelOrb.webp"
import LabOrb from "../Images/Orbs/LabOrb.webp"
import FragOrb from "../Images/Orbs/FragOrb.webp"
import MapOrb from "../Images/Orbs/MapOrb.webp"
import ScarabOrb from "../Images/Orbs/ScarabOrb.webp"
import GemOrb from "../Images/Orbs/GemOrb.webp"
import TalismanOrb from "../Images/Orbs/TalismanOrb.webp"
import UniqueOrb from "../Images/Orbs/UniqueOrb.webp"
import WeaponOrb from "../Images/Orbs/WeaponOrb.webp"
import None from "../Images/None.png"



const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Abyss", icon: Abyss, orb: "Abyssal Delirium Orb", orbIcon: AbyssOrb},
    {name: "Armour", icon: Armour, orb: "Armoursmith's Delirium Orb", orbIcon: ArmourOrb},
    {name: "Blight", icon: Blight, orb: "Blighted Delirium Orb", orbIcon: BlightOrb},
    {name: "Breach", icon: Breach, orb: "Obscured Delirium Orb", orbIcon: BreachOrb},
    {name: "Catalyst", icon: Catalyst, orb: "Amorphous Delirium Orb", orbIcon: CatalystOrb},
    {name: "Currency", icon: Currency, orb: "Fine Delirium Orb", orbIcon: CurrencyOrb},
    {name: "Divination Cards", icon: Div, orb: "Diviner's Delirium Orb", orbIcon: CardOrb},
    {name: "Essences", icon: Essence, orb: "Whispering Delirium Orb", orbIcon: EssenceOrb},
    {name: "Fossils", icon: Fossil, orb: "Fossilised Delirium Orb", orbIcon: FossilOrb},
    {name: "Harbinger", icon: Harbinger, orb: "Foreboding Delirium Orb", orbIcon: HarbOrb},
    {name: "Incubators/Legion", icon: Incubator, orb: "Timeless Delirium Orb", orbIcon: LegionOrb},
    {name: "Jewellery", icon: Jewel, orb: "Jeweller's Delirium Orb", orbIcon: JewelOrb},
    {name: "Labyrinth/Enchanted items", icon: Lab, orb: "Imperial Delirium Orb", orbIcon: LabOrb},
    {name: "Map Fragments", icon: Frag, orb: "Fragmented Delirium Orb", orbIcon: FragOrb},
    {name: "Maps", icon: Map, orb: "Cartographer's Delirium Orb", orbIcon: MapOrb},
    {name: "Misc Items", icon: Misc, orb: "N/A", orbIcon: None},
    {name: "Scarabs", icon: Scarab, orb: "Skittering Delirium Orb", orbIcon: ScarabOrb},
    {name: "Skill Gems", icon: Gem, orb: "Thaumaturge's Delirium Orb", orbIcon: GemOrb},
    {name: "Talismans", icon: Talisman, orb: "Primal Delirium Orb", orbIcon: TalismanOrb},
    {name: "Unique Items", icon: Unique, orb: "Singular Delirium Orb", orbIcon: UniqueOrb},
    {name: "Weapons", icon: Weapon, orb: "Blacksmith's Delirium Orb", orbIcon: WeaponOrb},
]

function RewardTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
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
                                    Reward Icon
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Delirium Orb
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Orb Icon 
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '25%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '25%'}}>
                                <Box 
                                    component="img"
                                    src={`${data.icon}`}
                                />
                            </TableCell>
                            <TableCell style={{width: '25%'}}> {data.orb} </TableCell>
                            <TableCell style={{width: '25%'}}> 
                                <Box 
                                    component="img"
                                    src={`${data.orbIcon}`}
                                /> 
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