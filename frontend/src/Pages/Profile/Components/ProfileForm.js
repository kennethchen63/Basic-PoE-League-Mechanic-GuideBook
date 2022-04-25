import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingForm from "./ListingForm";
import { getListings, reset } from "../../../Listings/listingSlice";
import ListingItem from "./ListingItem";

function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/");
    }

    dispatch(getListings());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <Grid container justifyContent="center">
      <Typography align="center" variant="h2">
        Welcome {user && user.name}
      </Typography>
      <Grid container justifyContent="center">
        <ListingForm />
      </Grid>
      <Grid container justifyContent="center">
        {listings.length > 0 ? (
          <Box>
            {listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
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

export default ProfileForm;
