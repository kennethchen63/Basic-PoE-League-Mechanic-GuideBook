import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function ErrorDesc() {

    return (
        <Grid container justifyContent="center">
            <Typography align="center" variant="h2" >
                Error 404: Page Not Found
            </Typography>
            <Grid container justifyContent="center">
                <Typography align="center" variant="h5">
                    You must have went to a page that does not exist. Please return back to the previous page or return back to the Home Page.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ErrorDesc;