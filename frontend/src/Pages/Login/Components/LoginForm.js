import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { login, reset } from "../../../Auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <Grid container justifyContent="center">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={email}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default LoginForm;
