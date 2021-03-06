import React from 'react';
import { Grid, Typography } from "@mui/material";
import BeastTypesTable from './BeastTypesTable';

function BeastTypes() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Beast Types
            </Typography>
            <Grid container justifyContent="center">
                <BeastTypesTable/>
            </Grid>
        </Grid>
    )
}

export default BeastTypes;