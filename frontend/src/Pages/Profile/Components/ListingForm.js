import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { createListing } from "../../../Listings/listingSlice";

function ListingForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createListing({ text }));
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
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
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              Add listing
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ListingForm;
