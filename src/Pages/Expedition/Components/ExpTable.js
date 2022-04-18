import React from "react";
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
import makeStyles from '@mui/styles/makeStyles';
import Dannig from "../Images/Dannig.webp"
import LessSun from "../Images/Artifacts/LessSun.webp"
import GreatSun from "../Images/Artifacts/GreatSun.webp"
import GrandSun from "../Images/Artifacts/GrandSun.webp"
import ExceptSun from "../Images/Artifacts/ExceptSun.webp"
import Burial from "../Images/Burial.webp"
import Gwennen from "../Images/Gwennen.webp"
import LessBroken from "../Images/Artifacts/LessBroken.webp"
import GreatBroken from "../Images/Artifacts/GreatBroken.webp"
import GrandBroken from "../Images/Artifacts/GrandBroken.webp"
import ExceptBroken from "../Images/Artifacts/ExceptBroken.webp"
import Astragali from "../Images/Astragali.webp"
import Tujen from "../Images/Tujen.webp"
import LessBlack from "../Images/Artifacts/LessBlack.webp"
import GreatBlack from "../Images/Artifacts/GreatBlack.webp"
import GrandBlack from "../Images/Artifacts/GrandBlack.webp"
import ExceptBlack from "../Images/Artifacts/ExceptBlack.webp"
import Exotic from "../Images/Exotic.webp"
import Rog from "../Images/Rog.webp"
import LessOrder from "../Images/Artifacts/LessOrder.webp"
import GreatOrder from "../Images/Artifacts/GreatOrder.webp"
import GrandOrder from "../Images/Artifacts/GrandOrder.webp"
import ExceptOrder from "../Images/Artifacts/ExceptOrder.webp"
import Scrap from "../Images/Scrap.webp"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [

    {name: "Dannig, Warrior Skald", image: Dannig, faction: "Knights of the Sun",less: "Lesser Sun Artifact", lessImage: LessSun, great: "Greater Sun Artifact", greatImage: GreatSun, grand: "Grand Sun Artifact", grandImage: GrandSun, except: "Exceptional Sun Artifact", exceptImage: ExceptSun, reroll: "Burial Medallion", rerollImage: Burial, theme: "Expedition Currency Items", boss: "Olroth, Origin of the Fall (81+)" },    
    {name: "Gwennen, the Gambler", image: Gwennen, faction: "Druids of the Broken Circle", less: "Lesser Broken Circle Artifact", lessImage: LessBroken, great: "Greater Broken Circle Artifact", greatImage: GreatBroken, grand: "Grand Broken Circle Artifact", grandImage: GrandBroken, except: "Exceptional Broken Circle Artifact", exceptImage: ExceptBroken, reroll: "Astragali", rerollImage: Astragali, theme: "Unique Items", boss: "Medved, Feller of Heroes (68+)"},
    {name: "Tujen, the Haggler", image: Tujen, faction: "Black Scythe Mercenaries", less: "Lesser Black Scythe Artifact", lessImage: LessBlack, great: "Greater Black Scythe Artifact", greatImage: GreatBlack, grand: "Grand Black Scythe Artifact", grandImage: GrandBlack, except: "Exceptional Black Scythe Artifact", exceptImage: ExceptBlack, reroll: "Exotic Coinage", rerollImage: Exotic, theme: "Currency", boss: "Vorana, Last to Fall (68+)"},
    {name: "Rog, the Dealer", image: Rog, faction: "Order of the Chalice", less: "Lesser Order Artifact", lessImage: LessOrder, great: "Greater Order Artifact", greatImage: GreatOrder, grand: "Grand Order Artifact", grandImage: GrandOrder, except: " Exceptional Order Artifact", exceptImage: ExceptOrder, reroll: "Scrap Metal", rerollImage: Scrap, theme: "Crafting Items", boss: "Uhred, Covetous Traitor (75+)"},
]


function ExpTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    NPC Image/Faction
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Artifacts
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Special/Reroll Currency 
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Theme
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Boss
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '15%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '15%'}}>
                                <TableRow>
                                    <Box 
                                        component="img"
                                        src={`${data.image}`}
                                    />
                                    <Typography align="center">
                                        {data.faction}
                                    </Typography>
                                </TableRow> 
                            </TableCell>
                            <TableCell style={{width: '25%'}}> 
                                <TableRow>
                                    {data.less}
                                    <Box 
                                        component="img"
                                        src={`${data.lessImage}`}
                                    />
                                </TableRow>
                                <TableRow>
                                    {data.great}
                                    <Box 
                                        component="img"
                                        src={`${data.greatImage}`}
                                    />
                                </TableRow>
                                <TableRow>
                                    {data.grand}
                                    <Box 
                                        component="img"
                                        src={`${data.grandImage}`}
                                    />
                                </TableRow>
                                <TableRow>
                                    {data.except}
                                    <Box 
                                        component="img"
                                        src={`${data.exceptImage}`}
                                    />
                                </TableRow>
                            </TableCell>
                            <TableCell style={{width: '15%'}}> 
                                {data.reroll}
                                <Box 
                                    component="img"
                                    src={`${data.rerollImage}`}
                                /> 
                            </TableCell>
                            <TableCell style={{width: '15%'}}> 
                                {data.theme}
                            </TableCell>
                            <TableCell style={{width: '15%'}}> 
                                {data.boss}
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default ExpTable;