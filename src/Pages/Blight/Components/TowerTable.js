import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles } from "@material-ui/core";
import Chilling from "../Images/Towers/Chilling.webp";
import Freezebolt from "../Images/Towers/Freezebolt.webp";
import GlacialCage from "../Images/Towers/GlacialCage.webp";
import Empowering from "../Images/Towers/Empowering.webp";
import Imbuing from "../Images/Towers/Imbuing.webp";
import Smothering from "../Images/Towers/Smothering.webp";
import Fireball from "../Images/Towers/Fireball.webp";
import Flamethrower from "../Images/Towers/Flamethrower.webp";
import Meteor from "../Images/Towers/Meteor.webp";
import Seismic from "../Images/Towers/Seismic.webp";
import StoneGaze from "../Images/Towers/StoneGaze.webp";
import Temporal from "../Images/Towers/Temporal.webp";
import ShockNova from "../Images/Towers/ShockNova.webp";
import Arc from "../Images/Towers/Arc.webp";
import LightningStorm from "../Images/Towers/LightningStorm.webp";
import Summoning from "../Images/Towers/Summoning.webp";
import Scout from "../Images/Towers/Scout.webp";
import Sentinel from "../Images/Towers/Sentinel.webp";


const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {towerimage: Chilling, tier1: "Chilling Tower Mk I", tier2: "Chilling Tower Mk II", tier3: "Chilling Tower Mk III", upgrades: "Increased Damage. Increased effect of Chill. Affects more Targets", upgrade1: "Freezebolt Tower", u1Image: Freezebolt, u1effects: "Increased Damage (Very High). Shoots a Piercing projectile which Freezes enemies.", upgrade2: "Glacial Cage Tower", u2Image: GlacialCage, u2effects: "Deals no Damage. Imprisons Enemies."},
    {towerimage: Empowering, tier1: "Empowering Tower Mk I", tier2: "Empowering Tower Mk II", tier3: "Empowering Tower Mk III", upgrades: "Increased effect aura.", upgrade1: "Imbuing Tower", u1Image: Imbuing, u1effects: "Improves the effectiveness of Players in range.", upgrade2: "Smothering Tower", u2Image: Smothering, u2effects: "Weakens Enemies in range."},
    {towerimage: Fireball, tier1: "Fireball Tower Mk I", tier2: "Fireball Tower Mk II", tier3: "Fireball Tower Mk III", upgrades: "Increased effect area. Cast more fireballs (1-3-5).", upgrade1: "Flamethrower Tower", u1Image: Flamethrower, u1effects: "Increased Damage (High). Casts a stream of Fire.", upgrade2: "Meteor Tower", u2Image: Meteor, u2effects: "Increased Damage (Very high). Rains Meteors from the sky."},
    {towerimage: Seismic, tier1: "Seismic Tower Mk I", tier2: "Seismic Tower Mk II", tier3: "Seismic Tower Mk III", upgrades: "Repeats more times (3-5-7).", upgrade1: "Stone Gaze Tower", u1Image: StoneGaze, u1effects: "Periodically Petrifies Monsters. No longer does damage.", upgrade2: "Temporal Tower", u2Image: Temporal, u2effects: "Persistently Slows Monsters. No longer does damage."},
    {towerimage: ShockNova, tier1: "Shock Nova Tower Mk I", tier2: "Shock Nova Tower Mk II", tier3: "Shock Nova Tower Mk III", upgrades: "Increased Damage. Increased chance to Shock. Increased Area of Effect.", upgrade1: "Arc Tower", u1Image: Arc, u1effects: "Increased Damage (Medium). Casts Arc.", upgrade2: "Lightning Storm Tower", u2Image: LightningStorm, u2effects: "Increased Damage (High). Lightning rapidly strikes around the Tower."},
    {towerimage: Summoning, tier1: "Summoning Tower Mk I", tier2: "Summoning Tower Mk II", tier3: "Summoning Tower Mk III", upgrades: "Summons more minions (3-5-7).", upgrade1: "Scout Tower", u1Image: Scout, u1effects: "Summons 10 Flying Minions dealing high damage.", upgrade2: "Sentinel Tower", u2Image: Sentinel, u2effects: "Summons one durable minion with a high life pool."},
]

function TowerTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Tower Icon
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Tiers
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Upgrade Effects
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Tier 4
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Tier 4 Tower Icon
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Tier 4 Effects
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '15%'}}>                                         
                            <Box 
                                component="img"
                                src={`${data.towerimage}`}
                            /> </TableCell>
                        <TableCell style={{width: '15%'}}>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.tier1}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.tier2}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.tier3}
                                </TableCell>
                            </TableRow>
                        </TableCell>
                        <TableCell style={{width: '15%'}}> {data.upgrades} </TableCell>
                        <TableCell style={{width: '15%'}}> 
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.upgrade1}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.upgrade2}
                                </TableCell>
                            </TableRow>
                        </TableCell>
                        <TableCell style={{width: "15"}}>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    <Box 
                                    component="img"
                                    src={`${data.u1Image}`}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    <Box 
                                    component="img"
                                    src={`${data.u2Image}`}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableCell>
                        <TableCell style={{width: '25'}}>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.u1effects}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    {data.u2effects}
                                </TableCell>
                            </TableRow>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TowerTable;