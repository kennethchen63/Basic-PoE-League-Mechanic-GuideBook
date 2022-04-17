import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Arcanist's Strongbox", contents: "Currency (Not Quality Currency)", tips: "Additional Items/Quantity"},
    {name: "Armourer's Strongbox", contents: "Armour and The Body Divination Car(Random Unique Body Armour) ", tips: "Sockets/Links"},
    {name: "Artisan's Strongbox", contents: "Quality Currency", tips: "None"},
    {name: "Blacksmith's Strongbox", contents: "Weapons", tips: "None"},
    {name: "Cartographer's Strongbox", contents: "Maps and The Cartographer Divination Card(10 Cartographer's Chisels)", tips: "Additional Items/Quantity"},
    {name: "Diviner's Strongbox", contents: "Random Divination Cards", tips: "Any Additional Items/Cards/Quantity"},
    {name: "Gemcutter's Strongbox", contents: "Random Gems and The Gemcutter Divination Card (1 Gemcutter's Prism)", tips: "None"},
    {name: "Jeweller's Strongbox", contents: "Random Jewellery and Hubris Divination Card(Random Unique Ring) ", tips: "None"},
    {name: "Large Strongbox", contents: "Random Items w/ Increased Quantity", tips: "None"},
    {name: "Ornate Strongbox", contents: "Random Items w/ Increased Rarity", tips: "None"},
    {name: "Strongbox", contents: "Random Items", tips: "None"},
]

function AmbushTable() {

    const classes = useStyles();

    return(
        <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Strongbox Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Loot
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Ideal Modifiers
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '33%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '33%'}}align="left">{data.contents}</TableCell>
                        <TableCell style={{width: '33%'}}align="left">{data.tips}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AmbushTable;