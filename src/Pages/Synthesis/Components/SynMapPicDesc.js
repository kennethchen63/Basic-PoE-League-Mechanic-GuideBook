import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Altered from "../images/Altered.JPG"
import Augmented from "../images/Augmented.JPG"
import Cortex from "../images/Cortex.JPG"
import Replica_Cortex from "../images/Replica_Cortex.JPG"
import Rewritten from "../images/Rewritten.JPG"
import Twisted from "../images/Twisted.JPG"

const useStyles = makeStyles(theme => ({
    cursor: {
        cursor: "pointer",
    },
}));

function SynMapPicDesc() {

    const [cortex, setCortex] = useState(false);

    const classes = useStyles();

    return (
        <Grid container justifyContent="space-around">
            <Grid item xs={2}>
                <Grid container justifyContent="center">
                    <Typography>
                        Altered Distant Memory
                    </Typography>
                    <Box 
                        component="img" 
                        src={`${Altered}`} 
                        width={325} 
                        height={375} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container justifyContent="center">
                        <Typography>
                            Augmented Distant Memory
                        </Typography>
                        <Box 
                            component="img" 
                            src={`${Augmented}`} 
                            width={325} 
                            height={375} 
                        />
                    </Grid>
                </Grid>
            <Grid item xs={2}>
                <Grid container justifyContent="center">
                        <Typography>
                            Cortex/Replica Cortex
                        </Typography>
                        <Box 
                            component="img"
                            maxWidth={325} // 375
                            maxHeight={375}  // 442
                            onClick={() => setCortex(prevMode => !prevMode)}
                            src={cortex ? `${Cortex}` : `${Replica_Cortex}`}
                            className={classes.cursor}
                        />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container justifyContent="center">
                        <Typography>
                            Rewritten Distant Memory
                        </Typography>
                        <Box 
                            component="img" 
                            src={`${Rewritten}`} 
                            width={325} 
                            height={375} 
                        />
                    </Grid>
                </Grid>
            <Grid item xs={2}>
                <Grid container justifyContent="center">
                    <Typography>
                        Twisted Distant Memory
                    </Typography>
                    <Box 
                        component="img" 
                        src={`${Twisted}`}
                        width={325} 
                        height={375} 
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SynMapPicDesc;