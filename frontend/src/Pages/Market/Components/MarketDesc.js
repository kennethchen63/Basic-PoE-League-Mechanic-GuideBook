import React from "react";
import { Grid, Typography } from "@mui/material";

function MarketDesc() {
  return (
    <Grid container justifyContent="center">
      <Typography align="center" variant="h2">
        Welcome to the Marketplace
      </Typography>
      <Grid container justifyContent="center">
        <Typography align="center" variant="h4">
          Here is all the current listings from other users
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MarketDesc;
