import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MarketDesc from "./Components/MarketDesc";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
  },
}));

function Market() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <div>
              <MarketDesc />
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Market;
