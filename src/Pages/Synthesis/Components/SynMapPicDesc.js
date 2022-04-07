import React, { useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Altered from "../images/Altered.JPG"
import Augmented from "../images/Augmented.JPG"
import Cortex from "../images/Cortex.JPG"
import Replica_Cortex from "../images/Replica_Cortex.JPG"
import Rewritten from "../images/Rewritten.JPG"
import Twisted from "../images/Twisted.JPG"

function SynMapPicDesc() {

    const [cortex, setCortex] = useState(false);

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={2}>
                <Grid container alignItems="center" justifyContent="center">
                    <Typography>
                        Altered Distant Memory
                    </Typography>
                    <Box component="img" src={`${Altered}`} align="center" 
                        width={325} 
                        height={375} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                            Augmented Distant Memory
                        </Typography>
                        <Box component="img" src={`${Augmented}`} align="center" 
                            width={325} 
                            height={375} 
                        />
                    </Grid>
                </Grid>
            <Grid item xs={2}>
                <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                            Cortex/Replica Cortex
                        </Typography>
                        <Box component="img" align="center" 
                            maxWidth={325} // 375
                            maxHeight={375}  // 442
                            onClick={() => setCortex(prevMode => !prevMode)}
                            src={cortex ? `${Cortex}` : `${Replica_Cortex}`}
                        />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container alignItems="center" justifyContent="center">
                        <Typography>
                            Rewritten Distant Memory
                        </Typography>
                        <Box component="img" src={`${Rewritten}`} align="center" 
                            width={325} 
                            height={375} 
                        />
                    </Grid>
                </Grid>
            <Grid item xs={2}>
                <Grid container alignItems="center" justifyContent="center">
                    <Typography>
                        Twisted Distant Memory
                    </Typography>
                    <Box component="img" src={`${Twisted}`} align="center" 
                        width={325} 
                        height={375} 
                    />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SynMapPicDesc;