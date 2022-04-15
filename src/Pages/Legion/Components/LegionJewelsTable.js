import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles} from "@material-ui/core";
import ElegantHubris from "../Images/ElegantHubris.webp";
import LethalPride from "../Images/LethalPride.webp";
import BrutalRestraint from "../Images/BrutalRestraint.webp";
import MilitantFaith from "../Images/MilitantFaith.webp";
import GloriousVanity from "../Images/GloriousVanity.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {l_name: "Eternal", j_name: "Elegant Hubris", image: ElegantHubris, modifiers: "Commissioned (2000-160000) coins to commemorate (Cadiro-Caspiro-Victario)", 
        key: { leader: ["Cadiro", "Caspiro", "Victario" ], keystone: ["Supreme Decadence", "Supreme Ostentation", "Supreme Grandstanding"], 
        modifier: ["Life Recovery from Flasks also applies to Energy Shield. 30% less Life Recovery from Flasks", 
                    "Ignore Attribute Requirements. Gain no inherent bonuses from Attributes", 
                    "Nearby Allies and Enemies Share Charges with you. Enemies Hitting you have 10% chance to gain an Endurance, Frenzy or Power Charge"] }, 
        general: "Minion/Kinetic Blast Deadeye Builds" },
    {l_name: "Karui", j_name: "Lethal Pride", image: LethalPride, modifiers: "Commanded leadership over (10000-18000) warriors under (Akoya-Kaom-Rakiata)", 
        key: { leader: ["Akoya", "Kaom", "Rakiata" ], keystone: ["Chainbreaker", "Strength of Blood", "Tempered by War"], 
        modifier: ["Regenerate 3 Rage per second. Increases and Reductions to Mana Regeneration Rate instead apply to Rage Regeneration Rate. Skills Cost +3 Rage", 
                    "Life Recovery from Non-Instant Leech is not applied. 1% less Damage taken for every 2% Life Recovery per second from Leech", 
                    "50% of Cold and Lightning Damage taken as Fire Damage. 50% less Cold Resistance. 50% less Lightning Resistance "] }, 
        general: "Strength Stacking/Melee Attack Builds" },
    {l_name: "Maraketh", j_name: "Brutal Restraint", image: BrutalRestraint, modifiers: "Denoted service of (500-8000) dekhara in the akhara of (Asenath-Balbala-Nasima)",
        key: { leader: ["Asenath", "Balbala", "Nasima" ], keystone: ["Dance with Death", "The Traitor", "Second Sight"], 
        modifier: ["Can't use Helmets. Your Critical Strike Chance is Lucky. Your Damage with Critical Strikes is Lucky. Enemies' Damage with Critical Strikes against you is Lucky", 
                    "Flasks Gain 4 Charges per empty Flask Slot every 5 seconds", 
                    "You are Blind. Blind does not affect your Light Radius. 25% more Melee Critical Strike Chance while Blinded "] }, 
        general: "Dexterity Stacking/Ranged Attack Builds" },
    {l_name: "Templar", j_name: "Militant Faith", image: MilitantFaith, modifiers: "Carved to glorify (2000-10000) new faithful converted by High Templar (Avarius-Dominus-Maxarius)", 
        key: { leader: ["Avarius", "Dominus", "Maxarius" ], keystone: ["Power of Purpose", "Inner Conviction", "Transcendence"], 
        modifier: ["80% of Maximum Mana is Converted to twice that much Armour", 
                    "3% more Spell Damage per Power Charge. Gain Power Charges instead of Frenzy Charges", 
                    "Armour applies to Fire, Cold and Lightning Damage taken from Hits instead of Physical Damage. -15% to all maximum Elemental Resistances"] }, 
        general: "Variety of Builds, depends on Devotion modifiers" },
    {l_name: "Vaal", j_name: "Glorious Vanity", image: GloriousVanity, modifiers: "Bathed in the blood of (100-8000) sacrificed in the name of (Ahuana-Doryani-Xibaqua)", 
        key: { leader: ["Ahuana", "Doryani", "Xibaqua" ], keystone: ["Immortal Amibiton", "Corrupted Soul", "Divine Flesh" ], 
        modifier: ["Energy Shield starts at zero. Cannot Recharge or Regenerate Energy Shield. Lose 5% of Energy Shield per second. Life Leech effects are not removed when Unreserved Life is Filled. Life Leech effects Recover Energy Shield instead while on Full Life", 
                    "50% of Non-Chaos Damage taken bypasses Energy Shield. Gain 15% of Maximum Life as Extra Maximum Energy Shield", 
                    "All Damage taken bypasses Energy Shield. 50% of Elemental Damage taken as Chaos Damage. +5% to maximum Chaos Resistance"] }, 
        general: "Defensive Purposes, changes passive tree nodes to different modifiers completely" },
]

function LegionJewels() {

    const classes = useStyles();

    return(
        <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Legion Fraction
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Legion Jewel Name
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Legion Jewel
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Modifiers
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Leader Name & Keystones
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                General Use
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '15%'}}> {data.l_name} </TableCell>
                        <TableCell style={{width: '15%'}}> {data.j_name} </TableCell>
                        <TableCell style={{width: '15%'}}>
                            <Box 
                                component="img"
                                src={`${data.image}`}
                                sx={{height: 50, width: 50}}
                            />
                        </TableCell>
                        <TableCell style={{width: '15%'}}>{data.modifiers} </TableCell>
                        <TableCell style={{width: '25%'}}>
                            <TableRow>
                                {data.key.leader.map((leader) => (
                                    <TableCell>{leader}</TableCell>
                                ))}
                             </TableRow>
                             <TableRow>
                             {data.key.keystone.map((keystone) => (
                                    <TableCell>{keystone}</TableCell>
                                ))}
                             </TableRow>
                             <TableRow>
                             {data.key.modifier.map((modifier) => (
                                    <TableCell style={{borderBottom: "none"}}>{modifier}</TableCell>
                                ))}
                             </TableRow>
                        </TableCell>
                        <TableCell style={{width: '15%'}}>{data.general} </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LegionJewels;