import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Agility from "../Images/Agility.webp"
import Brute from "../Images/Brute.webp"
import Counter from "../Images/Counter.webp"
import Demolition from "../Images/Demolition.webp"
import Deception from "../Images/Deception.webp"
import Engineer from "../Images/Engineer.webp"
import Lockpick from "../Images/Lockpick.webp"
import Perception from "../Images/Perception.webp"
import Trap from "../Images/Trap.webp"
import Bunker from "../Images/Bunker.webp"
import Lab from "../Images/Lab.webp"
import Library from "../Images/Library.webp"
import Mansion from "../Images/Mansion.webp"
import Records from "../Images/Records.webp"
import Repository from "../Images/Repository.webp"
import Smuggler from "../Images/Smuggler.webp"
import Tunnels from "../Images/Tunnels.webp"
import Underbelly from "../Images/Underbelly.webp"


const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Bunker", layout: Bunker, jobs: ["Agility", "Counter-Thaumaturgy", "Demolition", "Engineering", "Lockpicking", "Perception", "Trap Disarmament"], 
        icons: [Agility, Counter, Demolition, Engineer, Lockpick, Perception, Trap], },
    {name: "Laboratory", layout: Lab, jobs: ["Counter-Thaumaturgy", "Deception", "Demolition", "Engineering", "Perception"], 
        icons: [Counter, Deception, Demolition, Engineer, Perception], },
    {name: "Mansion", layout: Mansion, jobs: ["Agility", "Brute Force", "Deception", "Lockpicking", "Perception"], 
        icons: [Agility, Brute, Deception, Lockpick, Perception], },
    {name: "Prohibited Library", layout: Library, jobs: ["Counter-Thaumaturgy", "Deception", "Engineering","Lockpicking", "Perception"], 
        icons: [Counter, Deception, Engineer, Lockpick, Perception], },
    {name: "Record Offices", layout: Records, jobs: ["Brute Force", "Counter-Thaumaturgy",  "Deception", "Demolition","Lockpicking", "Trap Disarmament"], 
        icons: [Brute, Counter, Deception, Demolition, Lockpick, Trap], },
    {name: "Repository", layout: Repository, jobs: ["Agility", "Demolition", "Lockpicking", "Perception", "Trap Disarmament"], 
        icons: [Agility, Demolition, Lockpick, Perception, Trap], },
    {name: "Smuggler's Den", layout: Smuggler, jobs: ["Brute Force", "Deception", "Demolition", "Perception", "Trap Disarmament"], 
        icons: [Brute, Deception, Demolition, Perception, Trap], },
    {name: "Tunnels", layout: Tunnels, jobs: ["Agility", "Brute Force", "Counter-Thaumaturgy","Demolition", "Engineering", "Trap Disarmament"], 
        icons: [Agility, Brute, Counter, Demolition, Engineer, Trap], },
    {name: "Underbelly", layout: Underbelly, jobs: ["Agility", "Brute Force", "Deception", "Demolition", "Engineering"], 
        icons: [Agility, Brute, Deception, Demolition, Engineer ], },
]

function ContractTable() {

    const classes = useStyles();

    return(
        <TableContainer style={{ backgroundColor: "white"}}component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Contract Location
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Contract Layout
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Jobs
                            </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Job Icon
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '25%'}}> {data.name} </TableCell>
                        <TableCell style={{width: '25%'}}> 
                            <Box 
                                component="img"
                                src={`${data.layout}`}
                            />
                        </TableCell>
                        <TableCell style={{width: '25%'}}> 
                            {data.jobs.map((jobs) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        {jobs}
                                    </TableCell>
                                </TableRow>
                            ))} 
                        </TableCell>
                        <TableCell style={{width: '25%'}}> 
                            {data.icons.map((icons) => (
                                <TableRow>
                                    <TableCell style={{borderBottom: "none"}}>
                                        <Box 
                                            component="img"
                                            src={`${icons}`}
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
    )
}

export default ContractTable;