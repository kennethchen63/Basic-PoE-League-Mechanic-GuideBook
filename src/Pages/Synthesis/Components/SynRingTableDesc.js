import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Bottle from "../images/Bottle.JPG"
import Nebulis from "../images/Nebulis.JPG"
import SynTable from "./SynTable";


function SynRingTableDesc () {

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                    Cortex has its own drop pool of items, the most valuable drops being Bottled Faith (Unique Sulphur Flask) that is used by most Critical Builds and sometimes (Nebulis) Unique Spectre depending on its impliicts.
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                     The 4 other maps their own drop pool of items, the most valuable being unique synthesis rings (Circle of X) where X is based on each herald/element [Ash (Anguish), Ice (Fear), Purity(Guilt), Agony(Nostaliga), Thunder(Regret)].
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Typography>
                    Each of these unique synthesis rings roll from a modifier pool based on these categories:
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    <SynTable/>
                </Grid>
            </Grid>
        </Grid>
    )
};


export default SynRingTableDesc;