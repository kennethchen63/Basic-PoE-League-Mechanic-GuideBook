import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import EternalSplinter from "../Images/EternalSplinter.webp"
import EternalEmblem from "../Images/EternalEmblem.webp"
import EternalUnrelent from "../Images/EternalUnrelent.webp"
import KaruiSplinter from "../Images/KaruiSplinter.webp"
import KaruiEmblem from "../Images/KaruiEmblem.webp"
import KaruiUnrelent from "../Images/KaruiUnrelent.webp"
import MarakethSplinter from "../Images/MarakethSplinter.webp"
import MarakethEmblem from "../Images/MarakethEmblem.webp"
import MarakethUnrelent from "../Images/MarakethUnrelent.webp"
import TemplarSplinter from "../Images/TemplarSplinter.webp"
import TemplarEmblem from "../Images/TemplarEmblem.webp"
import TemplarUnrelent from "../Images/TemplarUnrelent.webp"
import VaalSplinter from "../Images/VaalSplinter.webp"
import VaalEmblem from "../Images/VaalEmblem.webp"
import VaalUnrelent from "../Images/VaalUnrelent.webp"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Eternal", splinter: EternalSplinter, emblem: EternalEmblem, unrelent: EternalUnrelent},
    {name: "Karui", splinter: KaruiSplinter, emblem: KaruiEmblem, unrelent: KaruiUnrelent},
    {name: "Maraketh", splinter: MarakethSplinter, emblem: MarakethEmblem, unrelent: MarakethUnrelent},
    {name: "Templar", splinter: TemplarSplinter, emblem: TemplarEmblem, unrelent: TemplarUnrelent},
    {name: "Vaal", splinter: VaalSplinter, emblem: VaalEmblem, unrelent: VaalUnrelent},
    
]

function LegionTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Legion Fraction
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Legion Splinter
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Legion Emblem
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Legion Unrelenting Emblem
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
                                src={`${data.splinter}`}
                                sx={{height: 50, width: 50}}
                            />
                        </TableCell>
                        <TableCell style={{width: '25%'}}>
                            <Box 
                                component="img"
                                src={`${data.emblem}`}
                                sx={{height: 50, width: 50}}
                            />
                        </TableCell>
                        <TableCell style={{width: '25%'}}>
                            <Box 
                                component="img"
                                src={`${data.unrelent}`}
                                sx={{height: 50, width: 50}}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LegionTable;