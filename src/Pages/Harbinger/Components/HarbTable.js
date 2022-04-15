import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid,Box, makeStyles} from "@material-ui/core";
import fBrutal from "../Images/Parts/fBrutal.webp"
import sBrutal from "../Images/Parts/sBrutal.webp"
import tBrutal from "../Images/Parts/tBrutal.webp"
import fDirect from "../Images/Parts/fDirect.webp"
import sDirect from "../Images/Parts/sDirect.webp"
import tDirect from "../Images/Parts/tDirect.webp"
import fFocus from "../Images/Parts/fFocus.webp"
import sFocus from "../Images/Parts/sFocus.webp"
import tFocus from "../Images/Parts/tFocus.webp"
import foFocus from "../Images/Parts/foFocus.webp"
import fStorm from "../Images/Parts/fStorm.webp"
import sStorm from "../Images/Parts/sStorm.webp"
import tStorm from "../Images/Parts/tStorm.webp"
import fArcane from "../Images/Parts/fArcane.webp"
import sArcane from "../Images/Parts/sArcane.webp"
import tArcane from "../Images/Parts/tArcane.webp"
import fTime from "../Images/Parts/fTime.webp"
import sTime from "../Images/Parts/sTime.webp"
import Enmity from "../Images/Assembled/Enmity.JPG"
import HaeScroll from "../Images/Scrolls/HaeScroll.JPG"
import Yielding from "../Images/Upgraded/Yielding.JPG"
import Spinner from "../Images/Assembled/Spinner.JPG"
import FragScroll from "../Images/Scrolls/FragScroll.JPG"
import Divinity from "../Images/Upgraded/Divinity.JPG"
import Unshatter from "../Images/Assembled/Unshatter.JPG"
import SpecScroll from "../Images/Scrolls/SpecScroll.JPG"
import Immortal from "../Images/Upgraded/Immortal.JPG"
import Bind from "../Images/Assembled/Bind.JPG"
import DeregScroll from "../Images/Scrolls/DeregScroll.JPG"
import Liberation from "../Images/Upgraded/Liberation.JPG"
import Ripple from "../Images/Assembled/Ripple.JPG"
import EleScroll from "../Images/Scrolls/EleScroll.JPG"
import Surge from "../Images/Upgraded/Surge.JPG"
import Flow from "../Images/Assembled/Flow.JPG"
import TimeScroll from "../Images/Scrolls/TimeScroll.JPG"
import Torrent from "../Images/Upgraded/Torrent.JPG"

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { parts: { names: ["First Piece of Brutality", "Second Piece of Brutality", "Third Piece of Brutality" ], images: [fBrutal, sBrutal, tBrutal]}, itemImage: Enmity, scrollImage: HaeScroll, uImage: Yielding},

    { parts: { names: ["First Piece of Directions", "Second Piece of Directions", "Third Piece of Directions" ], images: [fDirect, sDirect, tDirect]}, itemImage: Spinner, scrollImage: FragScroll, uImage: Divinity},

    { parts: { names: ["First Piece of Focus", "Second Piece of Focus", "Third Piece of Focus", "Fourth Piece of Focus"], images: [fFocus, sFocus, tFocus, foFocus]}, itemImage: Unshatter, scrollImage: SpecScroll,  uImage: Immortal},

    { parts: { names: ["First Piece of Storms", "Second Piece of Storms", "Third Piece of Storms"], images: [fStorm, sStorm, tStorm]},  itemImage: Bind, scrollImage: DeregScroll, uImage: Liberation},

    { parts: { names: ["First Piece of Arcane", "Second Piece of Arcane", "Third Piece of Arcane"], images: [fArcane, sArcane, tArcane]}, itemImage: Ripple, scrollImage: EleScroll, uImage: Surge},

    { parts: { names: ["First Piece of Time", "Second Piece of Time"], images: [fTime, sTime]}, itemImage: Flow, scrollImage: TimeScroll, uImage: Torrent},
]

function HarbTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Harbinger Items
            </Typography>
            <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Parts
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Part Images
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Assembled Item
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Upgrade Scroll
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Upgraded Item
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '20%'}}> 
                            {data.parts.names.map((names) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {names}
                                    </TableCell>
                                </TableRow>
                            ))} 
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                            {data.parts.images.map((images) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${images}`}
                                            sx={{height: 50, width: 50}}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))} 
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                <Box 
                                    component="img"
                                    src={`${data.itemImage}`}
                                /> 
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                <Box 
                                    component="img"
                                    src={`${data.scrollImage}`}
                                /> 
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                <Box 
                                    component="img"
                                    src={`${data.uImage}`}
                                /> 
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default HarbTable;