import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import TowerTable from './TowerTable';

function BlightTowers() {

    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Blight Towers
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                   There are a total of 6 different towers you can build, each with 4 tiers to it. Each tower has their unique abilities and are useful in their own way.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    The Chilling, Seismic, and Summoning towers are mainly used to delay monsters. The Fireball and Shock Nova are used for damage. Lastly, the Empowering Tower is used to buff other towers and yourself.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    There are many different strategies you can use. Some include using T3 Seisimic Towers to stun lock monsters. Others include using Chilling and Summoning Towers to delay those monsters that are resistant to Stun.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    Fireball towers are mainly used for damage. Empowering towers are used to enable Seismic towers to stun lock monsters easier and cause Fireball towers to do more damage.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <TowerTable/>
            </Grid>
        </Grid>
    )
}

export default BlightTowers;