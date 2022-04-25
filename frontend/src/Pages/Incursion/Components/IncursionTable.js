import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper } from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [

    {theme: "Armour", details: { name: ["Armourer's Workshop", "Armoury", "Chamber of Iron"], tier: ["1", "2", "3"], 
        description: ["Monsters throughout the Temple have increased resistance. Contains chests full of armour.", "Monsters throughout the Temple have increased resistance. Contains chests full of armour.", "Monsters throughout the Temple have increased resistance. Contains chests full of armour."], 
        modifiers: ["None", "None", "+40% Monster Physical Damage Reduction. +40% Monster Elemental Resistance. +25% Monster Chaos Resistance"] }},
    {theme: "Atziri", details: { name: ["Royal Meeting Room", "Halls of Lords", "Throne of Atziri"], tier: ["1", "2", "3"], 
        description: ["Increases the number of magic monsters throughout the Temple.", "Increases the number of magic monsters throughout the Temple.", "Contains Queen Atziri"], 
        modifiers: ["10% more Magic Monsters", "20% more Magic Monsters", "30% more Magic Monsters"] }},
    {theme: "Breach", details: { name: ["Splinter Research Lab", "Breach Containment Chamber", ""], tier: ["1", "2", "3"], 
        description: ["Contains a Breach", "Contains two Breaches and Breach Slinters. Breaches open/close faster.", "Contains three Breaches and Breach Slinters. Breaches open/close faster."], 
        modifiers: ["None", "None", "None"] }},
    {theme: "Corruption", details: { name: ["Corruption Chamber", "Catalyst of Corruption", "Locus of Corruption"], tier: ["1", "2", "3"], 
        description: ["Reduces player maximum resistances throughout the Temple.", "Reduces player maximum resistances throughout the Temple.", "Reduces player maximum resistances throughout the Temple. (Item Double Corrupt)"], 
        modifiers: ["-6% maximum Player Resistances", "-8% maximum Player Resistances", "-10% maximum Player Resistances"] }},
    {theme: "Currency", details: { name: ["Vault", "Treasury", "Wealth of the Vaal"], tier: ["1", "2", "3"], 
            description: ["Contains chests full of currency items.", "Contains chests full of currency items.", "Contains chests full of currency items."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Explosives", details: { name: ["Explosives Room", "Demolition Lab", "Shrine of Unmaking"], tier: ["1", "2", "3"], 
            description: ["Contains an Explosive Charge. Contains one Sealed Coffer.", "Contains Explosive Charges. Contains two Sealed Coffer.", "Contains Explosive Charges."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Fire", details: { name: ["Flame Workshop", "Omnitect Forge", "Crucible of Flame"], tier: ["1", "2", "3"], 
            description: ["Monsters throughout the Temple have additional fire damage. Adds additional Fire monster packs throughout the Temple. Augments the Omnitect with fire.", 
                "Monsters throughout the Temple have additional fire damage. Adds additional Fire monster packs throughout the Temple. Augments the Omnitect with fire.", 
                "Augments the Omnitect with fire.Contains a valuable item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Gems", details: { name: ["Gemcutter's Workshop", "Department of Thaumaturgy", "Doryani's Institue"], tier: ["1", "2", "3"], 
            description: ["Contains chests full of gems.", "Contains chests full of gems.", "Contains chests full of gems and a device that can corrupt gems in a special way. (Gem Double Corrupt)"], 
            modifiers: ["None", "None", "None"] }},
    {theme: "General Items", details: { name: ["Storage Room", "Warehouses", "Museum of Artefacts"],tier: ["1", "2", "3"], 
            description: ["Contains chests full of items.", "Contains chests full of items.", "Contains chests full of items."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Healing/Health", details: { name: ["Pools of Restoration", "Sanctum of Vitality", "Sanctum of Immortality"], tier: ["1", "2", "3"], 
            description: ["Heals monsters in the Temple.", "Heals monsters in the Temple.", "Heals monsters in the Temple. Contains a valuable item."], modifiers: ["None", "None", "None"] }},    
    {theme: "Item Level/Room Tier", details: { name: ["Shrine of Empowerment", "Sanctum of Unity", "Temple Nexus"], tier: ["1", "2", "3"], 
            description: ["Increases the speed of monsters throughout the Temple. Upgrades one random adjacent and connected room by one Tier.", 
            "Increases the speed of monsters throughout the Temple. Upgrades one random adjacent and connected room by one Tier. Increases level of items dropped by one. Upgrades two random adjacent and connected rooms by one Tier.", 
            "Increases the speed of monsters throughout the Temple. Upgrades one random adjacent and connected room by one Tier. Increases level of items dropped by one. Upgrades all adjacent rooms by one Tier."], 
            modifiers: ["10% increased Monster Cast Speed. 10% increased Monster Attack Speed", "15% increased Monster Cast Speed. 15% increased Monster Attack Speed", "20% increased Monster Cast Speed. 20% increased Monster Attack Speed. Monsters drop items 1 Level higher"] }},
    {theme: "Item Quantity", details: { name: ["Workshop", "Engineering Department", "Factory"], tier: ["1", "2", "3"], 
            description: ["Increases the life of the Omnitect and Monsters throughout the Temple. Increases item yield of the Temple.", 
                "Increases the life of the Omnitect and Monsters throughout the Temple. Increases item yield of the Temple.", 
                "Increases the life of the Omnitect and Monsters throughout the Temple. Increases item yield of the Temple."], 
            modifiers: ["20% increased Quantity of Items found in this Area. Unique Boss has 15% increased Life", 
                "40% increased Quantity of Items found in this Area. Unique Boss has 25% increased Life", 
                "60% increased Quantity of Items found in this Area. Unique Boss has 35% increased Life"] }},
    {theme: "Jewellery", details: { name: ["Jeweller's Workshop", "Jewellery Forge", "Glittering Halls"], tier: ["1", "2", "3"], 
            description: ["Increases the rarity of items dropped in the Temple. Contains chests full of jewellery.", 
                "Increases the rarity of items dropped in the Temple. Contains chests full of jewellery.", 
                "Increases the rarity of items dropped in the Temple. Contains chests full of jewellery."], 
                modifiers: ["None", "None", "None"] }},
    {theme: "Legion", details: { name: ["Hall of Mettle", "Hall of Heroes", "Hall of Legends"], tier: ["1", "2", "3"], 
            description: ["Contains a Timeless Monolith.", "Contains a valuable Timeless Monolith.", "Contains a Timeless Monolith that will reveal two Generals."], modifiers: ["None", "None", "None"] }},
    {theme: "Lightning",details: { name: ["Lightning Workshop", "Omnitect Reactor Plant", "Conduit of Lightning"], tier: ["1", "2", "3"], 
            description: ["Monsters throughout the Temple have additional lightning damage. Adds additional Lightning monster packs throughout the Temple. Augments the Omnitect with lightning.", 
            "Monsters throughout the Temple have additional lightning damage. Adds additional Lightning monster packs throughout the Temple. Augments the Omnitect with lightning.",
             "Monsters throughout the Temple have additional lightning damage. Adds additional Lightning monster packs throughout the Temple. Augments the Omnitect with lightning. Contains a valuable item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Maps", details: { name: ["Surveyor's Study", "Office of Cartography", "Atlas of Worlds"], tier: ["1", "2", "3"], 
            description: ["Contains chests full of maps.", "Contains chests full of maps.", "Contains chests full of maps. Architects drop Map-related currency (Sextants/Chisels)"], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Minions", details: { name: ["Hatchery", "Automaton Lab", "Hybridisation Chamber"], tier: ["1", "2", "3"], 
            description: ["Increase monster damage throughout the Temple. Adds additional Minion monster packs throughout the Temple. Augments the Omnitect with minions.",
            "Increase monster damage throughout the Temple. Adds additional Minion monster packs throughout the Temple. Augments the Omnitect with minions.", 
            "Increase monster damage throughout the Temple. Adds additional Minion monster packs throughout the Temple. Augments the Omnitect with minions."], 
            modifiers: ["10% increased Monster Damage", "15% increased Monster Damage", "20% increased Monster Damage"] }},
    {theme: "Monster Pack Size", details: { name: ["Guardhouse", "Barracks", "Hall of War"], tier: ["1", "2", "3"], 
            description: ["Increases monster pack size throughout the Temple.", "Increases monster pack size throughout the Temple.", "Increases monster pack size throughout the Temple."], 
            modifiers: ["10% increased Pack size", "12% increased Pack size", "30% increased Pack size"] }},
    {theme: "Poison/Chaos", details: { name: ["Poison Garden", "Cultivar Chamber", "Toxic Grove"], tier: ["1", "2", "3"], 
            description: ["Spreads poisonous plants throughout the Temple.", "Spreads poisonous and parasitic plants throughout the Temple.", "Spreads poisonous plants throughout the Temple. Contains a valuable item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Sacrifice Unique for Another Unique", details: { name: ["Sacrifical Chamber", "Hall of Offerings", "Apex of Ascension"], tier: ["1", "2", "3"], 
            description: ["Allows you to sacrifice a unique item for another random unique item. Ahuana drops an additional Unique Item.", 
            "Allows you to sacrifice a unique item for another unique item of the same item class. Ahuana drops an additional Unique Item.", 
            "Allows you to sacrifice a unique item and a vial to upgrade an Incursion Unique. Ahuana drops an additional Unique Item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Strongboxes", details: { name: ["Strongbox Chamber", "Hall of Locks", "Court of Sealed Death"], tier: ["1", "2", "3"], 
            description: ["Contains Strongboxes.", "Contains Strongboxes.", "Contains Strongboxes."], modifiers: ["None", "None", "None"] }},
    {theme: "Tempests", details: { name: ["Tempest Generator", "Hurricane Engine", "Storm of Corruption"], tier: ["1", "2", "3"], 
            description: ["Adds certain Tempests to the Temple. Buffs from Tempests have 50% increased duration.", 
            "Adds certain Tempests to the Temple", 
            "Adds Corrupting or Radiating Tempests to the Temple.Buffs from Tempests have 200% increased duration. Contains a valuable item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Tormented Spirits", details: { name: ["Torment Cells", "Torture Cages", "Sadist's Den"], tier: ["1", "2", "3"], 
            description: ["Contains Tormented Spirits. Contains additional roaming Tormented Spirits", "Contains Tormented Spirits.", "Contains Tormented Spirits."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Traps", details: { name: ["Trap Workshop", "Temple Defense Workshop", "Defense Research Lab"], tier: ["1", "2", "3"], 
            description: ["Adds traps throughout the Temple.", "Adds traps throughout the Temple.", "Monsters throughout the Temple have increased area of effect. Adds traps throughout the Temple. Contains a valuable item."], 
            modifiers: ["None", "None", "None"] }},
    {theme: "Weapons", details: { name: ["Sparring Room", "Arena of Valour", "Hall of Champions"], tier: ["1", "2", "3"], 
            description: ["Increases monster criticals throughout the Temple. Contains chests full of weapons.", 
            "Increases monster criticals throughout the Temple. Contains chests full of weapons.", 
            "Increases monster criticals throughout the Temple. Contains chests full of weapons."], 
            modifiers: ["None", "None", "20% increased Monster Damage   "] }},

]

function IncursionTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Room Theme
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Incursion Room
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Tier
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Description
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Temple Modifiers
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '20%'}}> {data.theme} </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                {data.details.name.map((name) => (
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>{name}</TableCell>
                                    </TableRow>
                                ))} 
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                {data.details.tier.map((tier) => (  
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>{tier}</TableCell>
                                    </TableRow>
                                ))}
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                {data.details.description.map((description) => (  
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>{description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableCell>
                            <TableCell style={{width: '20%'}}> 
                                {data.details.modifiers.map((modifiers) => (  
                                    <TableRow>
                                        <TableCell style={{borderBottom: "none"}}>{modifiers}</TableCell>
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

export default IncursionTable;
