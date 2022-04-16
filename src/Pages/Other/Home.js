import React from "react";
import {Typography, Box, Grid, ImageList, ImageListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Expedition from '../../images/Expedition.jpg'

const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

const itemData = [
    {
        img: Expedition,
        title: "Expedition",
    },
];


function Home() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.l_desc}>
                        <Typography align="center" variant="h2" >
                            Welcome to the site where you can learn about the basics of Path of Exile's League Mechanics!
                        </Typography>
                        <Typography align="center" variant="h5">
                            To start off, you can look at the left hand side of the site to explore each league mechanic that Path of Exile has to offer.
                        </Typography>
                        <Typography align="center" variant="h4">
                            If you are unfamiliar with what leagues are in Path of Exile, they are a type of mechanic that are potentially added to Path of Exile's base game 
                            after each expansion that are released every couple months!
                        </Typography>
                        <ImageList sx={{ width: 50  , height: 50 }} cols={3} rowHeight={500}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} ratio={4/3}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;