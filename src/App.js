import React from 'react';
import {AppBar, Typography, Toolbar, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Ambush from './Pages/Ambush'
import Abyss from './Pages/Abyss';
import Bestiary from './Pages/Bestiary';
import Betrayal from './Pages/Betrayal';
import Beyond from './Pages/Beyond';
import Blight from './Pages/Blight';
import Breach from './Pages/Breach';
import Bloodlines from './Pages/Bloodlines';
import Delirium from './Pages/Delirium';
import Delve from './Pages/Delve';
import Essence from './Pages/Essence';
import Expedition from './Pages/Expedition';
import Harbinger from './Pages/Harbinger';
import Harvest from './Pages/Harvest';
import Heist from './Pages/Heist';
import Incursion from './Pages/Incursion';
import Invasion from './Pages/Invasion';
import Legion from './Pages/Legion';
import Metamorph from './Pages/Metamorph';
import Nemesis from './Pages/Nemesis';
import Ritual from './Pages/Ritual';
import Synthesis from './Pages/Synthesis';
import Torment from './Pages/Torment';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
}));

const App = () => {

    const classes = useStyles();

    return (
        <BrowserRouter>
            <div>
                <Grid container>
                    <Grid item xs={12} container>
                        <AppBar color="primary">
                            <Toolbar>
                                <Typography>
                                    Logo Here
                                </Typography>
                                <Typography variant="h2" className={classes.title}>
                                Path of Exile League Mechanics  
                                </Typography>
                                <Button>
                                    Login
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                    <Routes>
                        <Route path="/" element={<Home/> }/>
                        <Route path="/Abyss" element={<Abyss/> }/>
                        <Route path="/Ambush" element={<Ambush/> }/>
                        <Route path="/Bestiary" element={<Bestiary/> }/>
                        <Route path="/Betrayal" element={<Betrayal/> }/>
                        <Route path="/Beyond" element={<Beyond/> }/>
                        <Route path="/Blight" element={<Blight/> }/>
                        <Route path="/Bloodlines" element={<Bloodlines/> }/>
                        <Route path="/Breach" element={<Breach/> }/>
                        <Route path="/Delirium" element={<Delirium/> }/>
                        <Route path="/Delve" element={<Delve/> }/>
                        <Route path="/Essence" element={<Essence/> }/>
                        <Route path="/Expedition" element={<Expedition/> }/>
                        <Route path="/Harbinger" element={<Harbinger/> }/>
                        <Route path="/Harvest" element={<Harvest/> }/>
                        <Route path="/Heist" element={<Heist/> }/>
                        <Route path="/Incursion" element={<Incursion/> }/>
                        <Route path="/Invasion" element={<Invasion/> }/>
                        <Route path="/Legion" element={<Legion/> }/>
                        <Route path="/Metamorph" element={<Metamorph/> }/>
                        <Route path="/Nemesis" element={<Nemesis/> }/>
                        <Route path="/Ritual" element={<Ritual/> }/>
                        <Route path="/Synthesis" element={<Synthesis/> }/>
                        <Route path="/Torment" element={<Torment/> }/>
                    </Routes>
            </div>      
        </BrowserRouter>
    )
}

export default App;