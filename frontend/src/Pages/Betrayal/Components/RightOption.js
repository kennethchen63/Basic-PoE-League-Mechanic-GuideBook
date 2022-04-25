import React from "react";
import { Grid, List, ListItem, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#121212",
  },
}));

const betray = [
  { outcome: "Gain Intelligence on a division or Mastermind" },
  { outcome: "Become the new leader of their division" },
  {
    outcome:
      "Remove another member from the Immortal Syndicate and will be replaced with someone else",
  },
  {
    outcome:
      "Steal ranks from another member while removing the rank of that member",
  },
  { outcome: "Destroy all items on members of another division" },
  {
    outcome:
      "Raise rank of all members of their division and lower rank of another",
  },
];

const baragain = [
  { outcome: "Gain Intelligence on a division" },
  {
    outcome:
      "Recruit an unranked member; raises their rank, adds them to their division, and become trusted with them",
  },
  { outcome: "Switch divisions with another member" },
  {
    outcome:
      "Leave the Immortal Syndicate; they will be replaced with someone else",
  },
  {
    outcome:
      "Immediately complete all interrogations: remaining Intelligence is gained, prisoners are released, and their ranks reduced by 1",
  },
  { outcome: "Destroy all items on members in their division" },
  { outcome: "Remove all rivalries" },
  { outcome: "Drop currency, map, veiled item, unique item, or scarab" },
];

function RightOption() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Typography variant="h2">Execute/Betray/Bargain</Typography>
      <Grid container justifyContent="center">
        <Typography>
          At the right side, you will be given one of the 3 options:
          Execute/Betray/Bargain. These choices are given to you depending on
          the encounter.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Execute: This option is given to you if there are 3 or more members
          present in an encounter.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Execute causes the member to rank up, or if they are rank 0, they will
          be assigned to the division of who they were assisting. The member
          will also receive a random item as a buff. The item will be seen next
          to them on the board.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Betray: This option is given to you if there are 2 members present in
          an encounter and are not rivals.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Betray causes the member to become Rivals with the other member. This
          is a good thing, as it creates a relationship between these two
          members to increase the chance of them appearing for more rewards and
          speeding up the board progress.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>Betray also causes one of these outcomes:</Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Box className={classes.box} container>
          <List>
            {betray.map((betray) => (
              <ListItem>
                <Typography>- {betray.outcome}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Bargain: This option is given to you if there is only one member
          present in an encounter.
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          Bargain gives you a random reward. Examples of Rewards are:
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Box className={classes.box} container>
          <List>
            {baragain.map((baragin) => (
              <ListItem>
                <Typography>- {baragin.outcome}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid container justifyContent="center">
        <Typography>
          The last option is at the bottom right next to your skills, it causes
          nothing to happen. The Syndicate Board remains the same if you do not
          like any of the other choices.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default RightOption;
