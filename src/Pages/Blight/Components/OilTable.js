import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper,Box, makeStyles} from "@material-ui/core";
import Clear from "../Images/Oils/Clear.webp";
import Sepia from "../Images/Oils/Sepia.webp";
import Amber from "../Images/Oils/Amber.webp";
import Verdant from "../Images/Oils/Verdant.webp";
import Teal from "../Images/Oils/Teal.webp";
import Azure from "../Images/Oils/Azure.webp";
import Indigo from "../Images/Oils/Indigo.webp";
import Violet from "../Images/Oils/Violet.webp";
import Crimson from "../Images/Oils/Crimson.webp";
import Black from "../Images/Oils/Black.webp";
import Opalescent from "../Images/Oils/Opalescent.webp";
import Silver from "../Images/Oils/Silver.webp";
import Golden from "../Images/Oils/Golden.webp";
import Tainted from "../Images/Oils/Tainted.webp";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {name: "Clear Oil", image: Clear, drop: "1"},
    {name: "Sepia Oil", image: Sepia, drop: "10"},
    {name: "Amber Oil", image: Amber, drop: "19"},
    {name: "Verdant Oil", image: Verdant, drop: "27"},
    {name: "Teal Oil", image: Teal, drop: "36"},
    {name: "Azure Oil", image: Azure, drop: "44"},
    {name: "Indigo Oil", image: Indigo, drop: "48"},
    {name: "Violet Oil", image: Violet, drop: "52"},
    {name: "Crimson Oil", image: Crimson, drop: "60"},
    {name: "Black Oil", image: Black, drop: "68"},
    {name: "Opalescent Oil", image: Opalescent, drop: "73"},
    {name: "Silver Oil", image: Silver, drop: "78"},
    {name: "Golden Oil", image: Golden, drop: "80"},
    {name: "Tainted Oil", image: Tainted, drop: "Corrupted Blighted Maps"},

]

function OilTable() {

    const classes = useStyles();

    return(
         <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"> 
                            <Typography className={classes.bold}>
                                Oil
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography className={classes.bold}>
                                Drop Requirement
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((data) => (
                    <TableRow>
                        <TableCell style={{width: '50%'}}> 
                            <Box component="img" src={`${data.image}`}/>
                            {data.name}
                        </TableCell>
                        <TableCell style={{width: '50%'}}align="left">{data.drop}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OilTable;