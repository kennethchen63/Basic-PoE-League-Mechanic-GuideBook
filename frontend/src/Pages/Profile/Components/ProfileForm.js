import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingForm from "./ListingForm";
import { getListings, reset } from "../../../Listings/listingSlice";
import ListingItem from "./ListingItem";

function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { listings, isError, message } = useSelector((state) => state.listings);

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
      <Grid>
        {listings.length > 0 ? (
          <Grid container justifyContent="space-evenly">
            {listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <Typography variant="h2"> You have no Listings </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default ProfileForm;
