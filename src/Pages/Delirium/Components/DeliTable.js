import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 800,
    },
}));

const data = [
    {del: "20%", inc: "7%", less: "19%"},
    {del: "40%", inc: "13%", less: "38%"},
    {del: "60%", inc: "18%", less: "58%"},
    {del: "80%", inc: "24%", less: "77%"},
    {del: "100%", inc: "30%", less: "96%"},
]

function DeliTable() {

    const classes = useStyles();

    return(
        <Grid container justifyContent="center">
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Delirious
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Increased Monster Damage
                                </Typography>
                            </TableCell>
                            <TableCell align="left"> 
                                <Typography className={classes.bold}>
                                    Less Damage Taken
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow>
                            <TableCell style={{width: '33%'}}> {data.del} </TableCell>
                            <TableCell style={{width: '33%'}}> {data.inc} </TableCell>
                            <TableCell style={{width: '33%'}}> {data.less} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default DeliTable