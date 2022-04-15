import React from 'react'
import { Grid, Typography } from "@material-ui/core";
// import UniqueTable from './UniqueTable';

function UniqueContract () {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Unique Contracts
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    There are a total of 5 unique contracts that have a special unique reward and boss at the end.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Below is a table list of the unique contracts and their drops.
                </Typography>
            </Grid>
            {/* <UniqueTable/> */}
        </Grid>
    )
}

export default UniqueContract;