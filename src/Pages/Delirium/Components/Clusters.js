import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function Clusters() {

    return(
        <Grid container justifyContent="center">
            <Typography variant="h3">
                Cluster Jewels
            </Typography>
            <Grid container justifyContent="center">
                <Typography>
                    There are 3 different sizes of cluster jewels from Small(2-3 passives) to Medium (4-6 passives) to Large (8-12 passives). 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These jewels also come with 2 enchants, one specifying the amount of passives and one determining the skill type. Medium and Large jewels have a 3rd enchant specifying the amount of jewel sockets it has. All these jewels can have up to 4 explicit modifiers.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    These jewels can have specific number notable nodes. Smalls can only have 1 (Prefix). Mediums can have up to 2 (Both Prefixes). Larges can have up to 3 (2 Prefixes and 1 Suffix). 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   To maximize the efficiency of your skill points, you should obtain the least amount of passives for each jewel. (2 for Small, 4-5 for Medium, 8 for Large) 4 and 5 passives for Medium costs the same amount of points to maximize efficiency of points.
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                    For jewel sockets on Medium and Large clusters you should always have 1 for Mediums and 2 for Larges. 
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography>
                   If you would like a full list of clusters and their modifiers you can click on the following links:
                </Typography>
            </Grid>
            <Grid container justifyContent='space-around'>
                <Typography variant="h5">
                    <a href='https://poedb.tw/us/mod.php?cn=BaseItemTypes&an=Small+Cluster+Jewel'>
                        Small Cluster Jewels
                    </a>
                </Typography>
                <Typography variant="h5">
                    <a href='https://poedb.tw/us/mod.php?cn=BaseItemTypes&an=Medium+Cluster+Jewel'>
                        Medium Cluster Jewels
                    </a>
                </Typography>
                <Typography variant="h5">
                    <a href='https://poedb.tw/us/mod.php?cn=BaseItemTypes&an=Large+Cluster+Jewel'>
                        Large Cluster Jewels
                    </a>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Clusters;