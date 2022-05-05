import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Link,
  IconButton,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core/";
import colors from "../Core/colors";
import { GitHub } from "@material-ui/icons";
export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "200px",
      color: colors.white,
      width: "101vw",
      overflowX: "hidden",
    },
    footer: {
      backgroundColor: "#19364f",
      height: "75%",
      width: "120%",
    },
    subfoot: {
      backgroundColor: "#0e1f2e",
      height: "32%",
      width: "100%",
    },
    link: {
      color: colors.white,
    },
  }));
  const classes = useStyles();
  const sendAnalytics = () => {
    //
  };
  return (
    <div className={classes.root}>
      <Grid className={classes.footer} container spacing={3}></Grid>
      <Grid className={classes.subfoot} container>
        <div style={{ display: "inline-block", margin: "auto" }}>
          <Button
            onClick={sendAnalytics}
            target="_blank"
            style={{ color: colors.white }}
            href="https://github.com/JoeySorkin/MillburnRoboticsWebsite"
            endIcon={<GitHub />}
          >
            Made By Joey Sorkin
          </Button>
          {" ©"} 2022
        </div>
      </Grid>
    </div>
  );
}
