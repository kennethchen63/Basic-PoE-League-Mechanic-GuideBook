import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box, List, ListItem } from "@mui/material";
import {makeStyles} from '@mui/styles';
import Apocalyptic from "../Images/Apocalyptic.webp";
import Bitter from "../Images/Bitter.webp";
import Charged from "../Images/Charged.webp";
import Dreaded from "../Images/Dreaded.webp";
import Emboldening from "../Images/Emboldening.webp";
import Ensconced from "../Images/Ensconced.webp";
import Fluctuant from "../Images/Fluctuant.webp";
import Fortressed from "../Images/Fortressed.webp";
import Foul from "../Images/Foul.webp";
import Glacial from "../Images/Glacial.webp";
import Haunted from "../Images/Haunted.webp";
import Infernal from "../Images/Infernal.webp";
import Invigorating from "../Images/Invigorating.webp";
import Malevolent from "../Images/Malevolent.webp";
import Opulent from "../Images/Opulent.webp";
import Sanguine from "../Images/Sanguine.webp";
import Suppressive from "../Images/Suppressive.webp";
import Vaal from "../Images/Vaal.webp";
import Violent from "../Images/Violent.webp";
import Volatile from "../Images/Volatile.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { name: "Apocalyptic", image: Apocalyptic, modifiers: ["Monsters deal extra Fire Damage and can Ignite", "Meteors fall from the sky", "All rewards are of the same type [Uniques/Currency/Divination Cards]"]},
    { name: "Bitter", image: Bitter, modifiers: ["Monsters deal extra Cold Damage and can Freeze", "Icy beams rotate"]},        
    { name: "Charged", image: Charged, modifiers: ["Monsters gain endure, frenzy, or power charges on hit", "Altar Charges Up and discharges monsters"]},
    { name: "Dreaded", image: Dreaded, modifiers: ["Monsters deal extra chaos damage and can wither", "Anomalies Fire Chaos Damage"]},            
    { name: "Emboldening", image: Emboldening, modifiers: ["Monsters are massive", "Altar causes monsters to grow even larger"]},
    { name: "Ensconced", image: Ensconced, modifiers: ["Monsters gain extra energy shield based on life", "Altar restores monster energy shield"]},
    { name: "Fluctuant", image: Fluctuant, modifiers: ["Monsters deal extra Lightning Damage and can Shock", "Skull Spires fire lightning orbs at each other"]},    
    { name: "Fortressed", image: Fortressed, modifiers: ["Monsters take reduced damage", "Fortress totems further reduce damage monsters take"]},
    { name: "Foul", image: Foul, modifiers: ["Monsters deal extra Chaos Damage and can Poison", "Toxic vines grasp you while stationary"]},
    { name: "Glacial", image: Glacial, modifiers: ["Monsters deal extra Cold Damage and can Freeze", "Icy beams rotate", "All rewards are of the same type [Uniques/Currency/Divination Cards]"]},    
    { name: "Haunted", image: Haunted, modifiers: ["Tormented Spirits haunt the ritual"]},
    { name: "Infernal", image: Infernal, modifiers: ["Monsters deal extra Fire Damage and can Ignite", "Meteors hit the ground that shoot out smaller fireballs that do damage randomly"]},
    { name: "Invigorating", image: Invigorating, modifiers: ["Monsters are fast", "Gales further accelerate you and monsters"]},
    { name: "Malevolent", image: Malevolent, modifiers: ["Monsters deal extra chaos damage and can wither", "Anomalies Fire Chaos Projectiles"]},
    { name: "Opulent", image: Opulent, modifiers: ["Monsters have greatly increased item rarity and quantity", "Contains cursed coin showers", "All rewards are of the same type [Uniques/Currency/Divination Cards]"]},      
    { name: "Sanguine", image: Sanguine, modifiers: ["Monsters do increased physical damage and can cause bleeding", "Pain totems pulse damaging waves"]},
    { name: "Suppressive", image: Suppressive, modifiers: ["Monsters regenerate life", "Smothering Mist reduces health regeneration"]},
    { name: "Vaal", image: Vaal, modifiers: ["Items dropped by slain monsters are corrupted", "Atziri's apparition protects the altar"]},  
    { name: "Violent", image: Violent, modifiers: ["Monsters deal extra Physical Damage and can inflect Bleeding", "Pain Totems pulse damaging waves"]},
    { name: "Volatile", image: Volatile, modifiers: ["Monsters deal extra Lightning Damage and can Shock", "Skull Spires fire lightning orbs at each other", "All rewards are of the same type [Uniques/Currency/Divination Cards]"]},
]


function RitualTypeTable() {

    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography className={classes.bold}>
                                Ritual Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.bold}>
                                Ritual Image
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.bold}>
                                Ritual Modifiers
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
                                />
                            </TableCell>
                            <TableCell>
                                {data.modifiers.map((modifiers) => (
                                    <List>
                                        <ListItem>
                                            - {modifiers}
                                        </ListItem>
                                    </List>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RitualTypeTable;