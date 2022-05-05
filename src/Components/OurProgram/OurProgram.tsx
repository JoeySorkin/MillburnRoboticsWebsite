import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import colors from "../Core/colors";
import Fade from "react-reveal/Fade";
import MMovie from "./MMovie.jpg";
import MMovie2 from "./MMovie2.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  papersmall: {
    margin: "30px",
    padding: "20px",
    backgroundColor: colors.blue,
    color: colors.white,
    minWidth: "320px",
    flex: "1",
  },
  paperbig: {
    margin: "30px",
    padding: "20px",
    backgroundColor: colors.blue,
    color: colors.white,
    minWidth: "320px",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  text: {
    fontSize: "23px",
  },
}));
export default function OurProgram() {
  const classes = useStyle();
  return (
    <div>
      <Fade>
        <Typography align="center" variant="h1">
          Our Program
        </Typography>
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexWrap="wrap">
            <Paper className={classes.papersmall}>
              <Typography variant="h3">Who We Are</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                We are a group of creative, innovative, and passionate students
                who work together in hope to accomplish the task of
                building/programming a flawless robot. We put an immense amount
                of effort and time into our robots as well as still hold our
                strong sportsmanship and values. We plan to overcome challenges
                together and learn from eachothers mistakes. Millburn Robotics
                allows us to grow not only as an engineer, but also as a person.
                <br />
                <br />
              </Typography>
            </Paper>
            <Paper className={classes.papersmall}>
              <img
                className={classes.img}
                width="auto"
                src={MMovie}
                alt="Millburn Robotics team"
              />
            </Paper>
          </Box>
          <Box>
            <Paper className={classes.paperbig}>
              <Typography variant="h3">Our Values</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                <b>Integrity</b> : By having strong, ethical, and a set of good
                moral principles that we follow at all times, we can truly
                become the best version of ourselves during competitions as well
                as while working with others.
              </Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                <b>Passion</b>: At Millburn, everyone that participates in our
                robotics program thoroughly enjoys it. We are the perfect outlet
                for a highschooler’s interest in STEM, and allow students access
                to materials in order for them to express their ideas.
              </Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                <b>Respect</b>: We strongly believe that in order to become a
                well functioning organization, everyone must treat others with
                respect, as it is a crucial characteristic of a good team. We
                take sportsmanship and helping other teams just as seriously as
                working on our robots.
              </Typography>
            </Paper>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Paper className={classes.papersmall}>
              <img
                className={classes.img}
                width="auto"
                src={MMovie2}
                alt="Millburn Robotics team"
              />
            </Paper>
            <Paper className={classes.papersmall}>
              <Typography variant="h3">What We Do</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                We are an organization that allows students to express
                themselves with the ability to create. Millburn Robotics takes
                part in various leagues and competitions such as VEX and VEX-AI,
                allowing our teams the opportunity to compete with a robot they
                have built.
                <br />
                <br />
                Led by two teachers at our school, Mr. Farrell and Mr. Seibert,
                our organization is divided among multiple teams, all with the
                prefix 7405. Both Mr. Farrell and Mr. Seibert assist students in
                executing their plans and ideas. With a large group of students,
                it is important to have reliable and capable teachers to mentor
                and run the organization. Along with this, we are proudly
                sponsored by parents of robotics team members.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Fade>
    </div>
  );
}
