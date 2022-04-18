import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, Box, makeStyles} from "@material-ui/core";
import Aberrant from "../Images/Fossils/Aberrant.webp";
import Aetheric from "../Images/Fossils/Aetheric.webp";
import Bloodstained from "../Images/Fossils/Bloodstained.webp";
import Bound from "../Images/Fossils/Bound.webp";
import Corroded from "../Images/Fossils/Corroded.webp";
import Deft from "../Images/Fossils/Deft.webp";
import Dense from "../Images/Fossils/Dense.webp";
import Faceted from "../Images/Fossils/Faceted.webp";
import Fractured from "../Images/Fossils/Fractured.webp";
import Frigid from "../Images/Fossils/Frigid.webp";
import Fundamental from "../Images/Fossils/Fundamental.webp";
import Gilded from "../Images/Fossils/Gilded.webp";
import Glyphic from "../Images/Fossils/Glyphic.webp";
import Hollow from "../Images/Fossils/Hollow.webp";
import Jagged from "../Images/Fossils/Jagged.webp";
import Lucent from "../Images/Fossils/Lucent.webp";
import Metallic from "../Images/Fossils/Metallic.webp";
import Perfect from "../Images/Fossils/Perfect.webp";
import Prismatic from "../Images/Fossils/Prismatic.webp";
import Pristine from "../Images/Fossils/Pristine.webp";
import Sanctified from "../Images/Fossils/Sanctified.webp";
import Scorched from "../Images/Fossils/Scorched.webp";
import Serrated from "../Images/Fossils/Serrated.webp";
import Shuddering from "../Images/Fossils/Shuddering.webp";
import Tangled from "../Images/Fossils/Tangled.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Aberrant Fossil", image: Aberrant, effects: "More Chaos modifiers. No Lightning modifiers."},
    {name: "Aetheric Fossil", image: Aetheric, effects: "More Caster modifiers. Fewer Attack modifiers."},
    {name: "Bloodstained Fossil",  image: Bloodstained, effects: "Corrupted. Has a Corrupted implicit modifier."},
    {name: "Bound Fossil", image: Bound, effects: "More Minion, Aura or Curse modifiers."},
    {name: "Corroded  Fossil", image: Corroded, effects: "More Physical Ailment or Chaos Ailment modifiers. No Elemental modifiers."},
    {name: "Deft Fossil", image: Deft, effects: "More Critical modifiers. No Attribute modifiers."},
    {name: "Dense Fossil", image: Dense, effects: "More Defence modifiers. No Life Modifiers."},
    {name: "Faceted Fossil", image: Faceted, effects: "More Gem modifiers."},
    {name: "Fractured Fossil", image: Fractured, effects: "	Creates a split copy. Cannot be used to split Influenced, Enchanted, Fractured, or Synthesised items."},
    {name: "Frigid Fossil", image: Frigid, effects: "More Cold modifiers. No Fire modifiers."},
    {name: "Fundamental Fossil", image: Fundamental, effects: "More Attribute modifiers. No Critical modifiers."},
    {name: "Gilded Fossil", image: Gilded, effects: "Item is overvalued by vendors."},
    {name: "Glyphic Fossil", image: Glyphic, effects: "Has a Corrupt Essence modifier."},
    {name: "Hollow Fossil", image: Hollow, effects: "Has an Abyssal socket."},
    {name: "Jagged Fossil", image: Jagged, effects: "More Physical modifiers. No Chaos modifiers."},
    {name: "Lucent Fossil", image: Lucent, effects: "More Mana modifiers. No Speed modifiers."},
    {name: "Metallic Fossil", image: Metallic, effects: "More Lightning modifiers. No Physical modifiers."},
    {name: "Perfect Fossil", image: Perfect, effects: "Improved Quality (Random Quality from 1-30%)"},
    {name: "Prismatic Fossil", image: Prismatic, effects: "More Elemental modifiers. No Physical Ailment or Chaos Ailment modifiers."},
    {name: "Pristine Fossil", image: Pristine, effects: "More Life modifiers. No Defence modifiers."},
    {name: "Sanctified Fossil", image: Sanctified, effects: "Numeric modifier values are lucky. High Level modifiers are more common."},
    {name: "Scorched Fossil", image: Scorched, effects: "More Fire modifiers. No Cold modifiers."},
    {name: "Serrated Fossil", image: Serrated, effects: "More Attack modifiers. Fewer Caster modifiers."},
    {name: "Shuddering Fossil", image: Shuddering, effects: "More Speed modifiers. No Mana modifiers."},
    {name: "Tangled Fossil", image: Tangled, effects: "Makes a random modifier type much more likely and prevents another random modifier type. Effects revealed once resonator is fully socketed."},
]

function FossilTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Delve Fossils
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    Delve's main rewards are fossils and resonators. They are used together to craft items with special restrictions.
                </Typography>
            </Grid>
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Fossil Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Fossil Icon
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Fossil Effects
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
                            <TableCell style={{width: '33%'}}> {data.effects} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default FossilTable;