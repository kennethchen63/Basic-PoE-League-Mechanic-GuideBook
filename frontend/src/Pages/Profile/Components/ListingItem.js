import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { deleteListing } from "../../../Listings/listingSlice";
import { updateListing } from "../../../Listings/listingSlice";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#121212",
  },
}));

function ListingItem({ listing }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [listData, setListData] = useState({
    text: "",
    username: "",
  });

  const { text, username } = listData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setListData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelete = () => {
    dispatch(deleteListing(listing._id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !username) {
      alert("Please fill in all fields");
    } else {
      const alistData = {
        text,
        username,
        listing,
      };

      dispatch(updateListing(alistData));
      setOpen(false);
      window.location.reload();
    }
  };

  return (
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
      <Grid container justifyContent="space-between">
        <Button
          variant="contained"
          style={{ textTransform: "none" }}
          onClick={handleClickOpen}
        >
          <Typography>Edit</Typography>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Listing</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit your Listing</DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Button variant="contained" onClick={handleDelete}>
          <Typography>X</Typography>
        </Button>
      </Grid>
    </Box>
  );
}

export default ListingItem;
