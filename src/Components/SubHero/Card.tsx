import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import cogwheel from "./cog.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";
interface CardProps {
  orient: "left" | "right";
  color: any;
  children: any;
  title: string;
}
export default function Card(props: CardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  // useEffect(()=>{

  // }, [rotation])
  // setInterval(()=>{rotation+=10}, 20)
  let [rotation, rotateCog] = useState(0);
  // setInterval(()=>{rotateCog(rotation + 5)}, 200)
  const useStyles = makeStyles((theme) => ({
    leftcard: {
      margin: `40px 6vw 40px 6vw`,
      width: matches ? "85vw" : "60vw",
      float: matches ? "none" : "left",
    },
    rightcard: {
      margin: "40px 6vw 40px 6vw",
      width: matches ? "85vw" : "60vw",
      float: matches ? "none" : "right",
    },
    text: {
      margin: "20px 20px",
      fontSize: "23px",
    },
    texttitle: {
      margin: "20px 20px",
    },

    leftcog: {
      position: "absolute",
      top: "-38px",
      left: "-38px",
      zIndex: -1,
      translate: "20px 0px",
      animation: "$rotationa 8s infinite linear",
    },
    rightcog: {
      position: "absolute",
      top: "-38px",
      right: "-38px",
      zIndex: -1,
      animation: "$rotationb 8s infinite linear",
    },
    "@keyframes rotationa": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(359deg)",
      },
    },
    "@keyframes rotationb": {
      from: {
        transform: "rotate(359deg)",
      },
      to: {
        transform: "rotate(0deg)",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Fade left={props.orient == "left"} right={props.orient != "left"}>
        <Paper
          style={{
            backgroundColor: props.color,
            position: "relative",
            height: "100%",
            width: "80s%",
          }}
          className={
            props.orient === "left" ? classes.leftcard : classes.rightcard
          }
          elevation={3}
        >
          <Typography className={classes.texttitle} variant="h3">
            {props.title}
          </Typography>
          <Typography className={classes.text} variant="body1">
            {props.children}
          </Typography>
          <img
            alt="rotating gear around text cards"
            react-material-ui-carouselstyle={{
              transform: `rotate(${rotation}deg)`,
            }}
            className={
              props.orient === "left" ? classes.leftcog : classes.rightcog
            }
            src={cogwheel}
          />
        </Paper>
      </Fade>
    </div>
  );
}
