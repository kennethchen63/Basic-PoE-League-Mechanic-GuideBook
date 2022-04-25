import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllListings, reset } from "../../../Listings/AllListingSlice";

function MarketDesc({ alllistings }) {
  const dispatch = useDispatch();

  const { listings, isLoading, isError, message } = useSelector(
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
        <Typography align="center" variant="h4">
          Here is all the current listings from other users
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        {listings.length > 0 ? (
          <Box>
            {listings.map((listing) => (
              <Typography> {listing.text} </Typography>
            ))}
          </Box>
        ) : (
          <Box>
            <Typography variant="h2"> You have no Listings </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default MarketDesc;
