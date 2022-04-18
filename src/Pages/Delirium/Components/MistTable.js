import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    { pause: ["During an Immortal Syndicate Research encounter", "During an Incursion encounter", "During a Legion Timeless Monolith encounter", "During a Breach encounter", "Being within range of a Blight portal","While in the Sacred Grove", "While within radius of a Ritual Altar"], extend: ["Opening a Strongbox","Defeating a monster holding an Essence", "Capturing a red Beast", "Defeating an Immortal Syndicate group", "An Abyss crack starts moving to the next direction", "Completing a Blight encounter", "Defeating a Metamorph", "Defeating a Harbinger"]}
]

function MistTable() {

    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Pauses Mist Timer
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Extends Mist Timer
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                                <TableCell style={{width: '50%'}}>
                                    {data.pause.map((pause) => (
                                        <TableRow>
                                            <TableCell style={{borderBottom: "none"}}>
                                                {pause} 
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableCell>
                                <TableCell style={{width: '50%'}}>
                                    {data.extend.map((extend) => (
                                        <TableRow>
                                            <TableCell style={{borderBottom: "none"}}>
                                                {extend} 
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default MistTable;