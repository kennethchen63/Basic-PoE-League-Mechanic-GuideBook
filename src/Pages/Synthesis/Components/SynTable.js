import React from "react";
import { List, ListItem, Typography, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    ring_box: {
        backgroundColor: 'purple',
    },
}));

function SynTable() {
    
    const classes = useStyles();

    return (
        <Box className={classes.ring_box} container>
            <List>
                <ListItem>
                    <Typography>
                            Herald of X has (40-60%) Buff Effect
                    </Typography>
                </ListItem>
                    <Divider/>
                <ListItem>
                    <Typography>
                            (40-60)% increased X Damage while affected by Herald of X
                    </Typography>
                </ListItem>
                    <Divider/>
                <ListItem>
                    <Typography>
                        +1% to maximum X Resistance/4% additional Physical Damage Reduction while affected by Herald of X
                    </Typography>
                </ListItem>
                    <Divider/>
                <ListItem>
                    <Typography>
                        Herald of X has (40-30)% increased Mana Reservation Efficiency
                    </Typography>
                </ListItem>
                    <Divider/>
                <ListItem>
                    <Typography>
                        +(50-60)% to X Resistance while affected by Herald of X
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        Agony Crawler/Sentinels of Purity deal (70-100%) incresed Damage
                    </Typography>
                </ListItem>
            </List>
        </Box>
    )
}

export default SynTable;