import React from "react";
import { List, ListItem, Typography, Divider, Box } from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    ring_box: {
        backgroundColor: 'brown',
    },
}));

const data = [
    { mod: "Herald of X has (40-60%) Buff Effect"},
    { mod: "(40-60)% increased X Damage while affected by Herald of X"},
    { mod: "+1% to maximum X Resistance/4% additional Physical Damage Reduction while affected by Herald of X"},
    { mod: "Herald of X has (40-30)% increased Mana Reservation Efficiency"},
    { mod: "+(50-60)% to X Resistance while affected by Herald of X"},
    { mod: "Agony Crawler/Sentinels of Purity deal (70-100%) incresed Damage"},
]


function SynTable() {
    
    const classes = useStyles();

    return (
        <Box className={classes.ring_box} container>
            {data.map((data) => (
                <List>
                    <ListItem>
                        <Typography>
                            {data.mod}
                        </Typography>
                    </ListItem>
                    <Divider/>
                </List>
            ))}
        </Box>
    )
}

export default SynTable;