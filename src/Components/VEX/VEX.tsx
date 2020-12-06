import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import colors from "../Core/colors";
import Fade from "react-reveal/Fade";
import team from "./Team.png";
import robot from "./Robot.png";
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
          VEX
        </Typography>
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexWrap="wrap">
            <Paper className={classes.papersmall}>
              <Typography variant="h3">About VEX Robotics</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                VEX Robotics is an organization that specializes in creating
                products and competitions for all ages and levels of students to
                participate in. Though there are recommended methods of creating
                your robot, each team has the ability to come up with their own
                designs and program to allow their robot to be capable of
                completing tasks that need to be executed during the
                competition.
                <br />
                <br />
              </Typography>
            </Paper>
            <Paper className={classes.papersmall}>
              <img
                className={classes.img}
                width="auto"
                src={team}
                alt="Millburn Robotics team holding vex robotics banner"
              />
            </Paper>
          </Box>
          <Box>
            <Paper className={classes.paperbig}>
              <Typography variant="h3">A Message From VEX</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                "Our world faces a serious problem. It’s a problem that, without
                explicit and intentional action, will eventually stagnate global
                progress and lead to a workforce that is unmotivated and
                ill-equipped to solve its future problems. As the world grows
                more technologically complex, the challenges we face every day
                will continue to escalate along with it. A cell phone has more
                failure modes than a landline. The internals of an electric car
                are more difficult to comprehend than a V8 combustion engine.
                Unmanned drone legislation is more nuanced than defining a
                maximum speed limit.
                <br />
                <br />
                Dubbed “the STEM problem”, the situation is equally simple to
                understand, yet difficult to solve. In many cases, the
                traditional methods of teaching science, technology,
                engineering, and math (STEM) will not be enough to adequately
                prepare students for this complex world. This is often coupled
                with the unfortunate reality that by the time they reach an age
                capable of grasping these critical topics, students may have
                already determined that they are “not cool” or “boring”. Without
                the skills or passion necessary to approach these problems in an
                educated manner, you cannot possibly expect to be productive in
                making forward progress or even sustaining the status quo.
                <br />
                <br />
                The VEX Robotics Competition exists to solve this problem.
                Through its uniquely engaging combination of teamwork, problem
                solving, and scientific discovery, the study of competitive
                robotics encompasses aspects of STEM. You’re not building VEX V5
                robots because your future job will involve tightening shaft
                collars on a metal bar – you’re executing an engineering design
                and problem-solving process that resembles the same mindset used
                by rocket scientists, brain surgeons, and inventors around the
                world. VEX Robotics Competition Change Up is not just a game
                that we invented because it is fun to play – it is a vehicle for
                teaching (and testing) teamwork, perseverance in the face of
                hardship, and provides a methodology to approach and solve new
                challenges with confidence...
                <br />
                <br />
                ...We encourage you to keep in mind that a VEX Robotics
                Competition game is more than just a set of game objects worth
                varying amounts of points. It is an opportunity to hone the
                life-long skills that will characterize the problem-solving
                leaders of tomorrow.
                <br />
                <br />
                Good luck, and we’ll see you on the playing field!
                <br />
                <br />
                Sincerely,
                <br />
                <br />
                The VEX Robotics Game Design Committee, comprised of members
                from the Robotics Education & Competition Foundation, DWAB
                Technology, and VEX Robotics."{" "}
                <Typography>
                  <i>
                    From the VEX Robotics Competition Champion's Bridge Game
                    Manual
                  </i>
                </Typography>
              </Typography>
            </Paper>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Paper className={classes.papersmall}>
              <img
                className={classes.img}
                width="auto"
                src={robot}
                alt="Millburn Robotics robot"
              />
            </Paper>
            <Paper className={classes.papersmall}>
              <Typography variant="h3">Why VEX</Typography>
              <br />
              <Typography className={classes.text} variant="body1">
                VEX allows us to get first hand experience with real world
                technologies and helps fill our desire to tinker and learn. You
                are able to code, build, and drive robots for competitions. It
                is available to all skill levels, making it perfect for someone
                who is a beginner to robotics, or someone who has lots of
                experience. Teams compete against other teams often of similar
                skill level, allowing them to enjoy their experience at
                competitions. Overall, is an opportunity to work and learn from
                others while taking part in a program that allows you to learn
                and create.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Fade>
    </div>
  );
}
