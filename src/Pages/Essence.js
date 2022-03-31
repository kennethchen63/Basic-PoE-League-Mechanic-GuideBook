import React from "react";
import { Grid } from "@material-ui/core";
import LeagueList from "../components/LeagueList/LeagueList";

function Essence() {

    return (
        <div>
            Essence            
            <Grid container>
                <LeagueList m={44}/>
            </Grid>
        </div>
    )
}

export default Essence;