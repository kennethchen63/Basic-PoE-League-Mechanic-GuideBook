import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Mines from "../Images/Biomes/Mines.webp";
import Fungal from "../Images/Biomes/Fungal.webp";
import Petrified from "../Images/Biomes/Petrified.webp";
import AbyssDepths from "../Images/Biomes/AbyssDepths.webp";
import FrozenHollow from "../Images/Biomes/FrozenHollow.webp";
import MagmaFissure from "../Images/Biomes/MagmaFissure.webp";
import SulphurVents from "../Images/Biomes/SulphurVents.webp";
import VaalCity from "../Images/Biomes/VaalCity.webp";
import AbyssCity from "../Images/Biomes/AbyssCity.webp";
import Primeval from "../Images/Biomes/Primeval.JPG";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { name: "Mines", icon: Mines, fossils: "Metallic, Serrated, Pristine, Aetheric", depths: "0-40", boss: "N/A"},
    { name: "Fungal Caverns", icon: Fungal, fossils: "Dense, Aberrant, Perfect, Corroded, Gilded, (Tangled in Haunted Tomb)", depths: "20+", boss: "N/A"},
    { name: "Petrified Forest", icon: Petrified, fossils: "Bound, Jagged, Corroded, Sanctified (Bloodstained in Stonewood Hollow)", depths: "20+", boss: "N/A"},
    { name: "Abyssal Depths", icon: AbyssDepths, fossils: "Aberrant, Bound, Gilded, Lucent, (Hollow in Crystal Spire)", depths: "25+", boss: "N/A"},
    { name: "Frozen Hollow", icon: FrozenHollow, fossils: "Frigid, Serrated, Prismatic, Sanctified, (Glyphic in Time-Lost Cavern)", depths: "40+", boss: "N/A"},
    { name: "Magma Fissure", icon: MagmaFissure, fossils: "Scorched, Prismatic, Pristine, Deft, Fundamental, (Faceted in Molten Cavity)", depths: "50+", boss: "N/A"},
    { name: "Sulphur Vents", icon: SulphurVents, fossils: "Metallic, Perfect, Aetheric, Fundamental, (Fractured in Humid Fissure)", depths: "75+", boss: "N/A"},
    { name: "Vaal Outpost", icon: VaalCity, fossils: "N/A", depths: "83+", boss: "Ahuatotli, the Blind (Depths 35+)"},
    { name: "Abyssal City", icon: AbyssCity, fossils: "N/A", depths: "83+", boss: "Kurgal, the Blackblooded (Depths 110+)"},
    { name: "Primeval Ruins", icon: Primeval, fossils: "N/A", depths: "220+", boss: "Aul, the Crystal King (Depths 145+)"},
]


function BiomeTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delve Biomes
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    The Delve mine itself has several different biomes, with their associated fossil rewards. Some of these biomes contain their own bosses with unique rewards.
                </Typography>
            </Grid>
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Biome Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Biome Icon
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Fossils
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Depths
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Possible Boss
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '20%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                <Box 
                                    component="img" 
                                    src={`${data.icon}`} 
                                    align="center" 
                                />
                            </TableCell>
                            <TableCell style={{width: '20%'}}> {data.fossils} </TableCell>
                            <TableCell style={{width: '20%'}}> {data.depths} </TableCell>
                            <TableCell style={{width: '20%'}}> {data.boss} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default BiomeTable;