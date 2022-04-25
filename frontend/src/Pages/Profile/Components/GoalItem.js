import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../../../Goals/goalSlice";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#121212",
  },
}));

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Box className={classes.box} sx={{ m: 2 }}>
        <Grid container justifyContent="space-evenly">
          <Typography variant="h6">
            {new Date(goal.createdAt).toLocaleString("en-US")}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4">{goal.text}</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Button onClick={() => dispatch(deleteGoal(goal._id))}>
            <Typography>X</Typography>
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default GoalItem;
