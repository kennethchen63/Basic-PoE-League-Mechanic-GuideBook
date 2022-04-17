import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box, makeStyles } from "@material-ui/core";
import Aisling from "../Images/Aisling.webp";
import Cameria from "../Images/Cameria.webp";
import Elreon from "../Images/Elreon.webp";
import Gravicius from "../Images/Gravicius.webp";
import Guff from "../Images/Guff.webp";
import Haku from "../Images/Haku.webp";
import Hillock from "../Images/Hillock.webp";
import ItThatFled from "../Images/ItThatFled.webp";
import Janus from "../Images/Janus.webp";
import Jorgin from "../Images/Jorgin.webp";
import Korell from "../Images/Korell.webp";
import Leo from "../Images/Leo.webp";
import Riker from "../Images/Riker.webp";
import Rin from "../Images/Rin.webp";
import Tora from "../Images/Tora.webp";
import Vagan from "../Images/Vagan.webp";
import Vorici from "../Images/Vorici.webp";
import Catarina from "../Images/Catarina.webp";


const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {agent: "Aisling", veil: "#% increased Global Physical Damage/#% increased Global Chaos Damage", agentImage: Aisling, trans: "Weapons and jewellery with two veiled mods", fort: "Armour and jewellery with two veiled mods", research: "Veiled Chaos Orbs; At tier 4, contains a Crafting Bench that removes a mod then adds a Non-Signature veiled mod to a Rare item", inter: "Torment Scarabs"},
    {agent: "Cameria", veil: "#% increased Global Critical Strike Chance/+#% to Critical Strike Multiplier if you've Shattered an Enemy Recently", agentImage: Cameria, trans: "League-specific Unique Items", fort: "Harbinger Orbs", research: "Orbs of Unmaking", inter: "Sulphite Scarabs"},
    {agent: "Eleron", veil: "Channeling/Non-Channeling Skills have -# to Total Mana Cost", agentImage: Elreon, trans: "Unique Weapons", fort: "Unique Armour", research: "Unique Jewellery/Flasks", inter: "Reliquary Scarabs"},
    {agent: "Gravicius", veil: "Gain #% of Maximum Life as Extra Maximum Energy Shield", agentImage: Gravicius, trans: "Full set of a Divination Card", fort: "Random Divination Cards", research: "Swaps Divination Cards for another", inter: "Divination Scarabs"},
    {agent: "Guff", veil: "#% increased Damage during any Flask Effect", agentImage: Guff, trans: "Chaos Spam Craft", fort: "Essence Spam Craft", research: "Exalt Spam Craft", inter: "Alt Spam Craft"},
    {agent: "Haku", veil: "+#% to Quality of Socketed Gems", agentImage: Haku, trans: "Random Rare Items", fort: "Random Strongbox", research: "Armours/Weapons with Quality", inter: "Ambush Scarabs"},
    {agent: "Hillock", veil: "#% increased Attributes", agentImage: Hillock, trans: "Weapon Quality", fort: "Armour Quality", research: "Flask Quality", inter: "Abyss Scarabs"},
    {agent: "It That Fled", veil: "Gain #% of Fire/Cold/Lightning Damage as extra Chaos Damage", agentImage: ItThatFled, trans: "Breach Splinters", fort: "Maps with Breach Enchantments", research: "Breachstone Upgrades", inter: "Breach Scarabs"},
    {agent: "Janus", veil: "#% increased Rarity of Items Dropped by Slain Rare or Unique Enemies", agentImage: Janus, trans: "Quality Currency", fort: "Currency Shards", research: "Expedition Artifacts", inter: "Expedition Scarabs"},
    {agent: "Jorgin", veil: "10% Chance to Trigger Level 10 Summon Spectral Wolf on Kill", agentImage: Jorgin, trans: "Rare Talismans", fort: "Rare Items with Aspect Skills", research: "Amulet to Talisman", inter: "Bestiary Scarabs"},
    {agent: "Korell", veil: "#% of Physical Damage from Hits taken as Fire Damage", agentImage: Korell, trans: "Essences", fort: "Map/Shaper/Uber Atziri Frags", research: "Fossils", inter: "Elder Scarabs"},
    {agent: "Leo", veil: "#% increased Damage", agentImage: Leo, trans: "Catalysts", fort: "Currency Orbs", research: "Applies Bless/Divine/Exalt Orb Effects", inter: "Metamorph Scarabs"},
    {agent: "Riker", veil: "#% increased Fire Damage/#% increased Lightning Damage", agentImage: Riker, trans: "Currency Stacks Trapped Chest", fort: "Unique Items Trapped Chest", research: "Ilvl 100 Veiled Rare Items", inter: "Blight Scarabs"},
    {agent: "Rin", veil: "#% chance to Avoid being Frozen/Cannot be Frozen", agentImage: Rin, trans: "Random Normal Maps", fort: "Random Rare Maps", research: "Unique Maps", inter: "Cartography Scarabs"},
    {agent: "Tora", veil: "Adds # to # Physical Damage/#% chance to cause Bleeding on Hit", agentImage: Tora, trans: "Random Selection Chest (Currency/Divination Cards/Uniques/ilvl 100 Veiled Rares)", fort: "Random Enchanted Item", research: "Adds EXP to Gems", inter: "Harbinger Scarabs"},
    {agent: "Vagan", veil: "Hits can't be Evaded", agentImage: Vagan, trans: "Legion Splinters", fort: "Legion Chests/War Hoard", research: "Incubators", inter: "Legion Scarabs"},
    {agent: "Vorici", veil: "#% increase Damage while Leeching", agentImage: Vorici, trans: "Quality Gems", fort: "Jewellers/Chromatic/Fusings", research: "White Sockets", inter: "Shaper Scarabs"},
    {agent: "Catarina", veil: "+# to Level of Socketed Support Gems", agentImage: Catarina, trans: "N/A", fort: "N/A", research: "N/A", inter: "N/A"},
]

function SafehouseTable() {

    const classes = useStyles();

    return(
        <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Syndicate Member
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Signature Veiled Modifier
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Transportation
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Fortification
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Research
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Intervention
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '25%'}}>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}}>
                                    <Box 
                                        component="img"
                                        src={`${data.agentImage}`}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{borderBottom: "none"}} align="center">
                                    {data.agent}
                                </TableCell>
                            </TableRow>
                        </TableCell>
                        <TableCell style={{width: '15%'}}align="left">{data.veil}</TableCell>
                        <TableCell style={{width: '15%'}}align="left">{data.trans}</TableCell>
                        <TableCell style={{width: '15%'}}align="left">{data.fort}</TableCell>
                        <TableCell style={{width: '15%'}}align="left">{data.research}</TableCell>
                        <TableCell style={{width: '15%'}}align="left">{data.inter}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SafehouseTable;