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
import { register, reset } from "../../../Auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
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

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Username"
              value={name}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />
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
            <TextField
              id="password2"
              name="password2"
              type="password"
              label="Confirm Password"
              value={password2}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained">
            Register
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default RegisterForm;
