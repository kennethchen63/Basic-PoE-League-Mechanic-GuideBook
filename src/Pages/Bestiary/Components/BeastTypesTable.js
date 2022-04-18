import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Paper,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {locale: "The Wilds", families: ["Felines: Hellions/Lynxes/Tigers", "Primates: Goatmen/Goat Shamans/Apes/Ape Chieftains", "Canines: Wolves/Karui Hounds/Pitbulls/Hounds", "Ursae: Gargantuans/Plummeting Ursae", "Unnaturals: Goliaths/Bulls"]},
    {locale: "The Sands", families: ["Avians: Rhoas/Retches/Vultures/Cockerels/Rhexes", "Reptiles: Snakes/Chimerals"]},
    {locale: "The Caverns", families: ["Insects: Carrion Queens/Carrion Insects/Leapers/Parasites", "Arachnids: Spiders/Devourers/Arachnoscorpions/Scorpions"]},
    {locale: "The Deep", families: ["Cephalopods: Sea Witches/Spawn/Watchers/Octopuses", "Crustaceans: Sand Spitters/Shield Crabs/Crabs/Lurchers/Spider Crabs", "Amphibians: Maws/Gem Frogs"]},
]

function BeastTypesTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Locale
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Families
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '50%'}}> {data.locale} </TableCell>
                        <TableCell style={{width: '50%'}}align="left">
                            {data.families.map((families) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {families}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BeastTypesTable;