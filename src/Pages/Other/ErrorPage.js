import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";




function ErrorPage() {

    return (
        <div>
            <Grid container>
                <Box>
                    <Typography variant="h1">
                        404 - Page not Found
                    </Typography>        
                </Box>
            </Grid>
        </div>
    )
}

export default ErrorPage;