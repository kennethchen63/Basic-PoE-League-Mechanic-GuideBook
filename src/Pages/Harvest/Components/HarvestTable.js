import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Primal Blisterfruit", type: "Primal", tier: "4", craft: "Reveals a random crafting effect for Influenced items when Harvested"},
    {name: "Primal Blisterlord Bulb", type: "Primal", tier: "3", craft: "Allows you to add a random Atlas Influence to a certain type of non-Influenced item when Harvested"},
    {name: "Primal Chimeral Grain", type: "Primal", tier: "2", craft: "Reveals a random crafting effect that upgrades a Normal or Magic item's Rarity when Harvested"},
    {name: "Primal Cleaveling Seed", type: "Primal", tier: "1", craft: "Reveals a random Unique Item transformation effect when Harvested"},
    {name: "Primal Crushclaw Bulb", type: "Primal", tier: "3", craft: "Allows you to exchange a Unique, Bestiary or Harbinger item for a related item when Harvested"},
    {name: "Primal Cystcaller Bulb", type: "Primal", tier: "3", craft: "Reveals a random Body Armour Enchantment that replaces Quality's effect when Harvested"},
    {name: "Primal Dustcrab Grain", type: "Primal", tier: "2", craft: "Allows you to exchange certain Map Fragments for another of the same type when Harvested"},
    {name: "Primal Dustspitter Seed", type: "Primal", tier: "1", craft: "Reveals a random Lightning modifier crafting effect when Harvested"},
    {name: "Primal Feasting Horror Seed", type: "Primal", tier: "1", craft: "Reveals a random Socket link crafting effect when Harvested"},
    {name: "Primal Maw Seed", type: "Primal", tier: "1", craft: "Reveals a random Chaos modifier crafting effect when Harvested"},
    {name: "Primal Reborn Bulb", type: "Primal", tier: "3", craft: "Doubles the Lifeforce granted by other seeds. This effect is limited to one per harvest when Harvested"},
    {name: "Primal Rhex Grain", type: "Primal", tier: "2", craft: "Allows you to sacrifice Divination Cards to create Divination Cards when Harvested"},
    {name: "Primal Rhex Matriarch Bulb", type: "Primal", tier: "3", craft: "Allows you to exchange Splinters, Breachstones or Emblems for others of the same type when Harvested"},
    {name: "Primal Rhoa Seed", type: "Primal", tier: "1", craft: "Reveals a random Defence modifier crafting effect when Harvested"},
    {name: "Primal Scrabbler Grain", type: "Primal", tier: "2", craft: "Allows you to modify an item, resulting in Lucky modifier values when Harvested"},
    {name: "Primal Viper Grain", type: "Primal", tier: "2", craft: "Reveals a random Critical modifier crafting effect when Harvested"},
    {name: "Vivid Abberarach Bulb", type: "Vivid", tier: "3", craft: "Allows you to upgrade an Offering to the Goddess when Harvested"},
    {name: "Vivid Arachnid Seed", type: "Vivid", tier: "1", craft: "Reveals a random Attack modifier crafting effect when Harvested"},
    {name: "Vivid Devourer Bulb", type: "Vivid", tier: "3", craft: "Adds 10 random Wild and Primal harvest outcomes. This effect is limited to one per harvest when Harvested"},
    {name: "Vivid Leech Seed", type: "Vivid", tier: "1", craft: "Reveals a random Socket number crafting effect when Harvested"},
    {name: "Vivid Nestback Grain", type: "Vivid", tier: "2", craft: "Reveals a random Map Enchantment when Harvested"},
    {name: "Vivid Parasite Grain", type: "Vivid", tier: "2", craft: "Allows you to add an Implicit modifier to certain Jewel types when Harvested	"},
    {name: "Vivid Razorleg Grain", type: "Vivid", tier: "2", craft: "Reveals a random Gem crafting effect when Harvested"},
    {name: "Vivid Sapsucker Grain", type: "Vivid", tier: "2", craft: "Allows you to change a Map into other Maps when Harvested"},
    {name: "Vivid Scalefruit", type: "Vivid", tier: "4", craft: "Allows you to give an item a Synthesised implicit modifier when Harvested"},
    {name: "Vivid Scorpion Seed", type: "Vivid", tier: "1", craft: "Reveals a random Cold modifier crafting effect when Harvested"},
    {name: "Vivid Striketail Grain", type: "Vivid", tier: "2", craft: "Reveals a random Flask Enchantment that depletes as it is used when Harvested"},
    {name: "Vivid Thornweaver Seed", type: "Vivid", tier: "1", craft: "Reveals a random Speed modifier crafting effect when Harvested"},
    {name: "Vivid Vulture Bulb", type: "Vivid", tier: "3", craft: "Allows you to modify a Scarab a certain way when Harvested"},
    {name: "Vivid Watcher Bulb", type: "Vivid", tier: "3", craft: "Allows you to enhance specialised Currency a certain way when Harvested"},
    {name: "Vivid Weta Seed", type: "Vivid", tier: "1", craft: "Reveals a random Life modifier crafting effect when Harvested"},
    {name: "Vivid Whipleg Bulb", type: "Vivid", tier: "3", craft: "Reveals a currency item exchange, trading ten of a certain type of currency for other currency items when Harvested"},
    {name: "Wild Ape Seed", type: "Wild", tier: "1", craft: "Reveals a random Fire modifier crafting effect when Harvested"},
    {name: "Wild Brambleback Bulb", type: "Wild", tier: "3", craft: "Reveals a random Weapon Enchantment that replaces Quality's effect when Harvested"},
    {name: "Wild Bristle Matron Bulb", type: "Wild", tier: "3", craft: "Allows you to sacrifice a Map to gain additional Atlas missions when Harvested"},
    {name: "Wild Bristlebeast Grain", type: "Wild", tier: "2", craft: "Reveals a random crafting effect that changes the element of Elemental Resistance modifiers when Harvested"},
    {name: "Wild Chieftain Grain", type: "Wild", tier: "2", craft: "Allows you to Sacrifice a Map to influence Zana's crafting options when Harvested"},
    {name: "Wild Hatchling Seed", type: "Wild", tier: "1", craft: "Reveals a random Currency crafting effect with improved outcome chances when Harvested"},
    {name: "Wild Hellion Alpha Bulb", type: "Wild", tier: "3", craft: "Allows you to sacrifice a Weapon or Armour to create Jewellery or Jewels when Harvested"},
    {name: "Wild Hellion Seed", type: "Wild", tier: "1", craft: "Reveals a random Physical modifier crafting effect when Harvested"},
    {name: "Wild Homunculus Grain", type: "Wild", tier: "2", craft: "Reveals a random effect that exchanges Fossils, Essences, Delirium Orbs, Oils or Catalysts when Harvested"},
    {name: "Wild Infestation Queen Bulb", type: "Wild", tier: "3", craft: "Causes other seeds to offer an additional crafting outcome. This effect is limited to one per harvest when Harvested"},
    {name: "Wild Snap Hound Grain", type: "Wild", tier: "2", craft: "Reveals a currency item exchange, trading three of a certain type of currency for other currency items when Harvested"},
    {name: "Wild Spikeback Grain", type: "Wild", tier: "2", craft: "Reveals a random crafting effect that reforges a Rare item a certain way when Harvested"},
    {name: "Wild Thornfruit", type: "Wild", tier: "4", craft: "Reveal a random crafting effect that locks a random modifier on an item when Harvested"},
    {name: "Wild Thornmaw Bulb", type: "Wild", tier: "3", craft: "Allows you to Sacrifice a Map to create items for the Atlas when Harvested"},
    {name: "Wild Thornwolf Seed", type: "Wild", tier: "1", craft: "Reveals a random Socket colour crafting effect when Harvested"},
    {name: "Wild Ursaling Seed", type: "Wild", tier: "1", craft: "Reveals a random Caster modifier crafting effect when Harvested"},
]

function HarvestTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Seeds
            </Typography>
            <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Seed Name
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Seed Type
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Seed Tier
                                </Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.bold}>
                                    Seed Craft
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '25%'}}> {data.name} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.type} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.tier} </TableCell>
                            <TableCell style={{width: '25%'}}> {data.craft} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default HarvestTable;