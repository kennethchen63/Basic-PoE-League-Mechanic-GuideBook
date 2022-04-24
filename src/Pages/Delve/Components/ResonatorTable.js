import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Primitive from "../Images/Resonators/Primitive.webp";
import Potent from "../Images/Resonators/Potent.png";
import Powerful from "../Images/Resonators/Powerful.webp";
import Prime from "../Images/Resonators/Prime.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Primitive Chaotic Resonator", image: Primitive, sockets: "1"},
    {name: "Potent Chaotic Resonator", image: Potent, sockets: "2"},
    {name: "Powerful Chaotic Resonator", image: Powerful, sockets: "3"},
    {name: "Prime Chaotic Resonator", image: Prime, sockets: "4"},

]

function ResonatorTable() {

    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delve Resonators
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    The Resonator socket count is how many fossils you can put inside them to craft with. Once the fossils are socketed in, they cannot be removed.
                </Typography>
            </Grid>
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Resonator Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Resonator Image
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Sockets
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
                                    align="center" 
                                />
                            </TableCell>
                            <TableCell style={{width: '33%'}}> {data.sockets} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default ResonatorTable;