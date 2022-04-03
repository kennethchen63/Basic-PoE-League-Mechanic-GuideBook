import React from "react";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import LeagueList from "../components/LeagueList/LeagueList";
     
const useStyles = makeStyles(theme => ({
    l_desc: {
        width: '100%',
        height: 950, 
        backgroundColor: 'gray', 
        marginTop: 64,
        marginLeft: 8,
    },
}));

function Betrayal() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item>
                    <LeagueList m={56}/>
                </Grid>
                <Grid item xs={11}>
                    <Box className={classes.l_desc}>
                        <Typography align="center" variant="h2">
                            Betrayal
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Betrayal;