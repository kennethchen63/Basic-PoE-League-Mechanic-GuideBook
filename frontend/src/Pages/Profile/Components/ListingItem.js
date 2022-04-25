import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { deleteListing } from "../../../Listings/listingSlice";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#121212",
  },
}));

function ListingItem({ listing }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Box className={classes.box} sx={{ m: 2 }}>
        <Grid container justifyContent="space-evenly">
          <Typography variant="h6">
            {new Date(listing.createdAt).toLocaleString("en-US")}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4">{listing.text}</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Button onClick={() => dispatch(deleteListing(listing._id))}>
            <Typography>X</Typography>
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default ListingItem;
