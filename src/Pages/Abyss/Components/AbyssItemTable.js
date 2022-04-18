import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles } from "@material-ui/core";
import Ghastly from "../Images/Ghastly.webp";
import Hypnotic from "../Images/Hypnotic.webp";
import Murderous from "../Images/Murderous.webp";
import Searching from "../Images/Searching.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Ghastly Eye Jewel", image: Ghastly, theme: "Melee Attack Modifiers"},
    {name: "Hypnotic Eye Jewel", image: Hypnotic, theme: "Summoner Modifiers"},
    {name: "Murderous Eye Jewel", image: Murderous, theme: "Ranged Attack Modifiers"},
    {name: "Searching Eye Jewel", image: Searching, theme: "Caster Modifiers"},
]

function AbyssItemTable() {

    const classes = useStyles();

    return (
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Abyss Jewel Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Modifier Type
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '50%'}}>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    <Box 
                                        component="img"
                                        src={`${data.image}`}
                                    />
                                </TableCell>
                            </TableRow>
                            {data.name} 
                        </TableCell>
                        <TableCell style={{width: '50%'}}align="left">{data.theme}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AbyssItemTable;