import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const leagues = [
    {name: "Abyss"},
    {name: "Ambush"},
    {name: "Bestiary"},
    {name: "Betrayal"},
    {name: "Beyond"},
    {name: "Blight"},
    {name: "Bloodlines"},
    {name: "Breach"},
    {name: "Delirium"},
    {name: "Delve"},
    {name: "Essence"},
    {name: "Expedition"},
    {name: "Harbinger"},
    {name: "Harvest"},
    {name: "Heist"},
    {name: "Incursion"},
    {name: "Legion"},
    {name: "Metamorph"},
    {name: "Ritual"},
    {name: "Synthesis"},
    {name: "Torment"},
]

const useStyles = makeStyles(theme => ({
    button: {
        cursor: "pointer", 
        textDecoration: "none", 
        color: "inherit"
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

    const classes = useStyles();
    
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between"}}>
                    <IconButton
                        size="large"
                        id="basic-button"
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {leagues.map((leagues) => (
                            <MenuItem 
                                style={{backgroundColor: "gray"}}
                                component={Link} to={leagues.name}
                            >
                                <Typography>
                                    {leagues.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Link to="/" className={classes.button}>              
                        <Typography variant="h2">
                            Basic Guide Book to Path of Exile League Mechanics
                        </Typography>
                    </Link>
                    <Link to="Login" className={classes.button}>
                        <Typography>
                            Login
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
      );
}

export default NavBar;