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
    Box,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Apex from "../Images/Uniques/Apex.JPG"
import Brute from "../Images/Jobs/Brute.webp"
import Counter from "../Images/Jobs/Counter.webp"
import Engineer from "../Images/Jobs/Engineer.webp"
import Lockpick from "../Images/Jobs/Lockpick.webp"
import Perception from "../Images/Jobs/Perception.webp"
import Admiral from "../Images/Uniques/Admiral.JPG"
import Chains from "../Images/Uniques/Chains.JPG"
import Fledgling from "../Images/Uniques/Fledgling.JPG"
import Leadership from "../Images/Uniques/Leadership.JPG"
import Nadir from "../Images/Uniques/Nadir.JPG"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { name: "Breaking the Unbreakable", rogue: "Isla", job: "Engineering 3", image: Engineer, loot: [Apex, Nadir]},
    { name: "Death to Darnaw", rogue: "Faustus", job: "Counter-Thaumaturgy 4", image: Counter, loot: [Admiral]},
    { name: "Heart of Glory", rogue: "Adiyah", job: "Perception 4", image: Perception, loot: [Fledgling]},
    { name: "The Slaver King", rogue: "Whakano", job: "Brute Force 3", image: Brute, loot: [Chains]},
    { name: "The Twins", rogue: "Kurai", job: "Lockpicking 5", image: Lockpick, loot: [Leadership]},
]
function UniqueTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Contract Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Rogue
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Job
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Job Icon
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Drops
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '20%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '20%'}}> {data.rogue} </TableCell>
                        <TableCell style={{width: '20%'}}> {data.job} </TableCell>
                        <TableCell style={{borderBottom: "none"}}>
                            <Box 
                                component="img"
                                src={`${data.image}`}
                            />
                        </TableCell>
                        <TableCell style={{width: '25%'}}> 
                            {data.loot.map((loot) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${loot}`}
                                            sx={{height: 400, width: 400}}
                                        />
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

export default UniqueTable;