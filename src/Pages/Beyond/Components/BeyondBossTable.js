import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles } from "@material-ui/core";
import Naem from "../Images/Naem.webp";
import Haast from "../Images/Haast.webp";
import Tzteosh from "../Images/Tzteosh.webp";
import Bameth from "../Images/Bameth.webp";
import Ephij from "../Images/Ephij.jpg";
import Abaxoth from "../Images/Abaxoth.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Na'em, Bending Stone", image: Naem, ability: "Leap Slam and Cleave"},
    {name: "Haast, Unrelenting Frost", image: Haast, ability: "Ice Spear, Glacial Cascade, Ice Nova, Cold Snap"},
    {name: "Tzteosh, Hungering Flame", image: Tzteosh, ability: "Flameblast, Summon Raging Spirit, Molten Strike"},
    {name: "Bameth, Shifting Darkness", image: Bameth, ability: "Raise Dead, Vaal Detonate Dead, Descrate"},
    {name: "Ephij, Crackling Sky", image: Ephij, ability: "Vaal Storm Call, Ball Lightning, Lightning Warp, Lightning Strike"},
    {name: "Abaxoth, the End of All That Is", image: Abaxoth, ability: "Ice Spear, Vaal Storm Call, Summon Skeletons, Vaal Flameblast, Flicker Strike, Ball Lightning, Chaos damage over time Aura"},
]

function BeyondBossTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Beyond Boss
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Main Abilities
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '50%'}}>
                            <TableRow>
                                <Box 
                                    component="img" 
                                    src={`${data.image}`}
                                    sx={{height: 200, width: 200}}
                                />
                            </TableRow>
                            <TableRow>
                                {data.name} 
                            </TableRow>
                        </TableCell>
                        <TableCell style={{width: '50%'}}align="left">{data.ability}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BeyondBossTable;