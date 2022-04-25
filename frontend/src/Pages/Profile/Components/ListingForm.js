import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { createListing } from "../../../Listings/listingSlice";

function ListingForm() {
  const [listData, setListData] = useState({
    text: "",
    username: "",
  });

  const { text, username } = listData;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const alistData = {
      text,
      username,
    };

    dispatch(createListing({ alistData }));
  };

  const handleChange = (e) => {
    setListData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container>
              <TextField
                id="text"
                name="text"
                type="text"
                label="Your Listing"
                value={text}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                id="username"
                name="username"
                type="text"
                label="Username"
                value={username}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                margin="normal"
              />
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              <Typography>Add listing</Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ListingForm;
