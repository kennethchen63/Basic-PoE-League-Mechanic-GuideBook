import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllListings, reset } from "../../../Listings/AllListingSlice";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#121212",
  },
}));

function MarketDesc({ alllistings }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { listings, isError, message } = useSelector(
    (state) => state.alllistings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getAllListings());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  return (
    <Grid container justifyContent="center">
      <Typography align="center" variant="h2">
        Welcome to the Marketplace
      </Typography>
      <Grid container justifyContent="center">
        <Typography align="center" variant="h3">
          Here is all the current listings from other users
        </Typography>
      </Grid>
      <Grid>
        {listings.length > 0 ? (
          <Grid container justifyContent="space-evenly">
            {listings.map((listing) => (
              <Box className={classes.box} sx={{ m: 2 }}>
                <Grid container justifyContent="center">
                  <Typography variant="h4">Listing</Typography>
                </Grid>
                <Grid container justifyContent="center" sx={{ mb: 2 }}>
                  <Typography variant="body1">{listing.text}</Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Typography variant="h4">Username</Typography>
                </Grid>
                <Grid container justifyContent="center" sx={{ mb: 2 }}>
                  <Typography variant="body1">{listing.username}</Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Typography variant="body1">
                    {new Date(listing.createdAt).toLocaleString("en-US")}
                  </Typography>
                </Grid>
              </Box>
            ))}
          </Grid>
        ) : (
          <Box sx={{ m: 2 }}>
            <Typography variant="h2"> There are no Listings </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default MarketDesc;
