import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Abrasive from "../Images/Abrasive.webp"
import Accelerating from "../Images/Accelerating.webp"
import Fertile from "../Images/Fertile.webp"
import Imbued from "../Images/Imbued.webp"
import Intrinsic from "../Images/Instrinsic.webp"
import Noxious from "../Images/Noxious.webp"
import Prismatic from "../Images/Prismatic.webp"
import Tempering from "../Images/Tempering.webp"
import Turbulent from "../Images/Turbulent.webp"
import Unstable from "../Images/Unstable.webp"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Abrasive Catalyst", image: Abrasive, modifier: "Adds quality that enhances Attack modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Acclerating Catalyst", image: Accelerating, modifier: "Adds quality that enhances Speed modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Fertile Catalyst", image: Fertile, modifier: "Adds quality that enhances Life and Mana modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Imbued Catalyst", image: Imbued, modifier: "Adds quality that enhances Caster modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Intrinsic Catalyst", image: Intrinsic, modifier: "Adds quality that enhances Attribute modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Noxious Catalyst", image: Noxious, modifier: "Adds quality that enhances Physical and Chaos Damage modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Prismatic Catalyst", image: Prismatic, modifier: "Adds quality that enhances Resistance modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Tempering Catalyst", image: Tempering, modifier: "Adds quality that enhances Defence modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Turbulent Catalyst", image: Turbulent, modifier: "Adds quality that enhances Elemental Damage modifiers on a ring, amulet or belt. Replaces other quality types"},
    {name: "Unstable Catalyst", image: Unstable, modifier: "Adds quality that enhances Critical modifiers on a ring, amulet or belt. Replaces other quality types"},
]


function CatalystTable() {

    const classes = useStyles();

    return (
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Catalyst
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Catalyst Image
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Catalyst Modifier
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '33%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '33%'}}>
                            <Box 
                                component="img"
                                src={`${data.image}`}
                                sx={{height: 50, width: 50}}
                            />
                        </TableCell>
                        <TableCell style={{width: '33%'}}align="left">{data.modifier}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CatalystTable;