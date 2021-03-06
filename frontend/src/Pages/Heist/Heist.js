import React from "react";
import { Grid, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';
import HeistDesc from "./Components/HeistDesc";
import RogueTable from "./Components/RogueTable";
import ContractDesc from "./Components/ContractDesc";
import ContractTable from "./Components/ContractTable";
import BlueprintDesc from "./Components/BlueprintDesc";
import ContractRewards from "./Components/ContractRewards";
import UniqueContract from "./Components/UniqueContract";

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: "100%", 
        backgroundColor: 'gray', 
    },
}));

function Heist() {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.box}>
                        <div>
                            <HeistDesc/>
                        </div>
                        <div>
                            <RogueTable/>
                        </div>
                        <div>
                            <ContractDesc/>
                        </div>
                        <div>
                            <ContractTable/>
                        </div>
                        <div>
                            <BlueprintDesc/>
                        </div>
                        <div>
                            <ContractRewards/>
                        </div>
                        <div>
                            <UniqueContract/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Heist;