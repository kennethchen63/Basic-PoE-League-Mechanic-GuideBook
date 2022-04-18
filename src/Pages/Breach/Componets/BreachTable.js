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
import eSplinter from "../Images/Esh/eSplinter.webp";
import eBase from "../Images/Esh/eBase.webp";
import eCharged from "../Images/Esh/eCharged.webp";
import eEnriched from "../Images/Esh/eEnriched.webp";
import ePure from "../Images/Esh/ePure.webp";
import Esh from "../Images/Esh/Esh.webp";
import HoTA from "../Images/Esh/HoTA.JPG";
import Mirror from "../Images/Esh/Mirror.JPG";
import Voice from "../Images/Esh/Voice.JPG";
import eBless from "../Images/Esh/eBless.webp";
import HoWA from "../Images/Esh/HoWA.JPG";
import Visage from "../Images/Esh/Visage.JPG";
import Choir from "../Images/Esh/Choir.JPG";
import tSplinter from "../Images/Tul/tSplinter.webp";
import tBase from "../Images/Tul/tBase.webp";
import tCharged from "../Images/Tul/tCharged.webp";
import tEnriched from "../Images/Tul/tEnriched.webp";
import tPure from "../Images/Tul/tPure.webp";
import Tul from "../Images/Tul/Tul.webp";
import Tulborn from "../Images/Tul/Tulborn.JPG";
import Snowblind from "../Images/Tul/Snowblind.JPG";
import Halcyon from "../Images/Tul/Halcyon.JPG";
import tBless from "../Images/Tul/tBless.webp";
import Tulfall from "../Images/Tul/Tulfall.JPG";
import Perfect from "../Images/Tul/Perfect.JPG";
import Pand from "../Images/Tul/Pand.JPG";
import xSplinter from "../Images/Xoph/xSplinter.webp";
import xBase from "../Images/Xoph/xBase.webp";
import xCharged from "../Images/Xoph/xCharged.webp";
import xEnriched from "../Images/Xoph/xEnriched.webp";
import xPure from "../Images/Xoph/xPure.webp";
import Xoph from "../Images/Xoph/Xoph.webp";
import Inception from "../Images/Xoph/Inception.JPG";
import Flame from "../Images/Xoph/Flame.JPG";
import Heart from "../Images/Xoph/Heart.JPG";
import xBless from "../Images/Xoph/xBless.webp";
import Nurture from "../Images/Xoph/Nurture.JPG";
import Inferno from "../Images/Xoph/Inferno.JPG";
import Blood from "../Images/Xoph/Blood.JPG";
import uSplinter from "../Images/UulNetol/uSplinter.webp";
import uBase from "../Images/UulNetol/uBase.webp";
import uCharged from "../Images/UulNetol/uCharged.webp";
import uEnriched from "../Images/UulNetol/uEnriched.webp";
import uPure from "../Images/UulNetol/uPure.webp";
import Uul from "../Images/UulNetol/Uul.webp";
import Kiss from "../Images/UulNetol/Kiss.JPG";
import Pursuit from "../Images/UulNetol/Pursuit.JPG";
import Anticipation from "../Images/UulNetol/Anticipation.JPG";
import uBless from "../Images/UulNetol/uBless.webp";
import Embrace from "../Images/UulNetol/Embrace.JPG";
import Trail from "../Images/UulNetol/Trail.JPG";
import Surrender from "../Images/UulNetol/Surrender.JPG";
import cSplinter from "../Images/Chayula/cSplinter.webp";
import cBase from "../Images/Chayula/cBase.webp";
import cCharged from "../Images/Chayula/cCharged.webp";
import cEnriched from "../Images/Chayula/cEnriched.webp";
import cPure from "../Images/Chayula/cPure.webp";
import Chayula from "../Images/Chayula/None.png";
import Sever from "../Images/Chayula/Sever.JPG";
import Loyal from "../Images/Chayula/Loyal.JPG";
import RedDream from "../Images/Chayula/RedDream.JPG";
import GreenDream from "../Images/Chayula/GreenDream.JPG";
import BlueDream from "../Images/Chayula/BlueDream.JPG";
import cBless from "../Images/Chayula/cBless.webp";
import United from "../Images/Chayula/United.JPG";
import Lords from "../Images/Chayula/Lords.JPG";
import RedNightmare from "../Images/Chayula/RedNightmare.JPG";
import GreenNightmare from "../Images/Chayula/GreenNightmare.JPG";
import BlueNightmare from "../Images/Chayula/BlueNightmare.JPG";


const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { name: "Esh (Lvl 1+)", theme: "Lightning", splinter: "Splinter of Esh", splinterImage: eSplinter, stones: ["Esh's Breachstone", "Esh's Charged Breachstone", "Esh's Enriched Breachstone", "Esh's Pure Breachstone"], stoneImage: [eBase, eCharged, eEnriched, ePure], boss: "Esh, Forked Thought", bossImage: Esh, uniqueImages: [HoTA, Mirror, Voice], blessing: "Blessing of Esh", blessImage: eBless, upgradeImage: [HoWA, Visage, Choir]},
    { name: "Tul (Lvl 1+)", theme: "Cold", splinter: "Splinter of Tul", splinterImage: tSplinter, stones: ["Tul's Breachstone", "Tul's Charged Breachstone", "Tul's Enriched Breachstone", "Tul's Pure Breachstone"], stoneImage: [tBase, tCharged, tEnriched, tPure], boss: "Tul, Creeping Avalanche", bossImage: Tul, uniqueImages: [Tulborn, Snowblind, Halcyon], blessing: "Blessing of Tul", blessImage: tBless, upgradeImage: [Tulfall, Perfect, Pand]},
    { name: "Xoph (Lvl 1+)", theme: "Fire", splinter: "Splinter of Xoph", splinterImage: xSplinter, stones: ["Xoph's Breachstone", "Xoph's Charged Breachstone", "Xoph's Enriched Breachstone", "Xoph's Pure Breachstone"], stoneImage: [xBase, xCharged, xEnriched, xPure], boss: "Xoph, Dark Embers", bossImage: Xoph, uniqueImages: [Inception, Flame, Heart], blessing: "Blessing of Xoph", blessImage: xBless, upgradeImage: [Nurture, Inferno, Blood]},
    { name: "Uul-Netol (Lvl 40+)", theme: "Physical", splinter: "Splinter of Uul-Netol", splinterImage: uSplinter, stones: ["Uul-Netol's Breachstone", "Uul-Netol's Charged Breachstone", "Uul-Netol's Enriched Breachstone", "Uul-Netol's Pure Breachstone"], stoneImage: [uBase, uCharged, uEnriched, uPure], boss: "Uul-Netol, Unburdened Flesh", bossImage: Uul, uniqueImages: [Kiss, Pursuit, Anticipation], blessing: "Blessing of Uul-Netol", blessImage: uBless, upgradeImage: [Embrace, Trail, Surrender]},
    { name: "Chayula (Lvl 68+)", theme: "Chaos", splinter: "Splinter of Chayula", splinterImage: cSplinter, stones: ["Chayula's Breachstone", "Chayula's Charged Breachstone", "Chayula's Enriched Breachstone", "Chayula's Pure Breachstone"], stoneImage: [cBase, cCharged, cEnriched, cPure], boss: "Chayula, Who Dreamt", bossImage: Chayula, uniqueImages: [Sever, Loyal, RedDream, GreenDream, BlueDream], blessing: "Blessing of Chayula", blessImage: cBless, upgradeImage: [United, Lords, RedNightmare, GreenNightmare, BlueNightmare]},
]

function BreachTable() {

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
                                    Theme
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Splinter
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Breachstones
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Boss
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Unique Items
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Blessing
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Upgraded Items
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '12%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '12%'}}> {data.theme} </TableCell>
                            <TableCell style={{width: '12%'}}>
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${data.splinterImage}`}
                                        />
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {data.splinter} 
                                    </TableCell>
                                </TableRow>
                            </TableCell>
                            <TableCell style={{width: '12%'}}>
                                <TableRow>
                                        {data.stoneImage.map((stoneImage) => (
                                            <TableCell style={{borderBottom: "none"}}>
                                                <Box 
                                                    component="img"
                                                    src={`${stoneImage}`}
                                                />
                                            </TableCell>
                                        ))} 
                                    </TableRow>  
                                    <TableRow>
                                        {data.stones.map((stones) => (
                                            <TableCell style={{borderBottom: "none"}}>
                                                {stones}
                                            </TableCell>
                                        ))} 
                                    </TableRow>
                            </TableCell>
                            <TableCell style={{width: '12%'}}> 
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${data.bossImage}`}
                                            sx={{height: 200, width: 200}}
                                        />
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {data.boss} 
                                    </TableCell>
                                </TableRow>
                            </TableCell>
                            <TableCell style={{width: '12%'}}> 
                                {data.uniqueImages.map((uniqueImages) => (
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${uniqueImages}`}
                                            sx={{width: 350, height: 350}}
                                        />
                                        </TableCell>
                                    </TableRow>
                                ))} 
                            </TableCell>
                            <TableCell style={{width: '12%'}}>
                                <Box 
                                    component="img"
                                    src={`${data.blessImage}`}
                                />
                                {data.blessing} 
                            </TableCell>
                            <TableCell style={{width: '12%'}}> 
                                {data.upgradeImage.map((upgradeImage) => (
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${upgradeImage}`}
                                            sx={{width: 350, height: 350}}
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
        </Grid>
    )
}

export default BreachTable;