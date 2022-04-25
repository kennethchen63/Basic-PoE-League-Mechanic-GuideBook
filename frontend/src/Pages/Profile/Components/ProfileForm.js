import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingForm from "./ListingForm";
import { getGoals, reset } from "../../../Goals/goalSlice";
import GoalItem from "./GoalItem";

function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/");
    }

    dispatch(getGoals());

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
        {goals.length > 0 ? (
          <Box>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </Box>
        ) : (
          <Box>
            <Typography variant="h2"> You have no Goals </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default ProfileForm;
