import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";

import { logout, reset } from "../Auth/authSlice";

const leagues = [
  { name: "Abyss" },
  { name: "Ambush" },
  { name: "Bestiary" },
  { name: "Betrayal" },
  { name: "Beyond" },
  { name: "Blight" },
  { name: "Bloodlines" },
  { name: "Breach" },
  { name: "Delirium" },
  { name: "Delve" },
  { name: "Essence" },
  { name: "Expedition" },
  { name: "Harbinger" },
  { name: "Harvest" },
  { name: "Heist" },
  { name: "Incursion" },
  { name: "Legion" },
  { name: "Metamorph" },
  { name: "Ritual" },
  { name: "Synthesis" },
  { name: "Torment" },
];

const useStyles = makeStyles((theme) => ({
  button: {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
}));

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const goProfile = () => {
    navigate("/Profile");
  };

  const goMarket = () => {
    navigate("/Market");
  };

  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <IconButton size="large" id="basic-button" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {leagues.map((leagues) => (
                <MenuItem
                  style={{ backgroundColor: "gray" }}
                  component={Link}
                  to={leagues.name}
                >
                  <Typography>{leagues.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {user ? (
              <IconButton onClick={goProfile}>
                <AccountCircleIcon />
              </IconButton>
            ) : (
              <></>
            )}
            <IconButton>
              <StoreIcon onClick={goMarket} />
            </IconButton>
          </Grid>
          <Link to="/" className={classes.button}>
            <Typography variant="h3">
              Basic Guide Book to Path of Exile's League Mechanics
            </Typography>
          </Link>
          <Box>
            {user ? (
              <>
                <Button style={{ textTransform: "none" }} onClick={onLogout}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <ListItem>
                  <Link to="Login" className={classes.button}>
                    <Typography>Login</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="Register" className={classes.button}>
                    <Typography>Register</Typography>
                  </Link>
                </ListItem>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
