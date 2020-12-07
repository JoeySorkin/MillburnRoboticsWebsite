import React from "react";
import {
  Avatar,
  Modal,
  Card,
  Typography,
  Chip,
  Paper,
  Button,
  Backdrop,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Name, User } from "./Members";
import MuiFade from "@material-ui/core/Fade";

import AryanDugarPng from "./Profiles/AryanDugar.png";
import Fade from "react-reveal/Fade";
interface UserProps {
  User: User;
  captain: boolean;
}
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

export default function UserComp(props: UserProps) {
  const person = props.User;
  const handleClick = () => {};
  const useStyles = makeStyles((theme) => ({
    chip: {
      margin: "0px 10px 0px -5px",
    },
    root: {
      width: "280px",
      margin: "5px",
      padding: "10px",
    },
    card: {
      display: "flex",
      flexWrap: "wrap",
      margin: "5px",
      padding: "0px",
    },
    cardModal: {
      display: "flex",
      flexWrap: "wrap",
      margin: "5px",
      padding: "2vw",
      maxWidth: "300px",
    },
    cardHeader: {
      margin: "0px 10px",
      display: "flex",
      width: "335px",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    cardBody: {
      margin: "0px 10px",
      display: "flex",
      height: "300px",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ModalBody: {
      margin: "0px 10px",
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
    },
    readmore: {
      margin: "10px -10px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    close: {
      margin: "-10px 20px 10px 20px",
      width: "86%",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fade up>
      <Card elevation={5} className={classes.root}>
        <div className={classes.card}>
          <div className={classes.cardHeader}>
            <Avatar
              style={{ margin: "5px" }}
              alt={person.name.first + " " + person.name.last}
              src={person.photo}
            />
            <Typography style={{ marginLeft: "2px" }} variant="h6">
              {person.name.first + " " + person.name.last}
            </Typography>
          </div>
          <div className={classes.cardBody}>
            {person.roles.map((data, index) => {
              return (
                <li key={index}>
                  <Chip label={data} className={classes.chip} />
                </li>
              );
            })}
            {props.captain ? (
              <li>
                <Chip label={"Captain"} className={classes.chip} />
              </li>
            ) : (
              ""
            )}
            <Typography variant="body1">
              {[truncateString(person.bio, 180)]}
            </Typography>
            <Button onClick={handleOpen} className={classes.readmore}>
              Read More
            </Button>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <MuiFade in={open}>
            <Paper>
              <div className={classes.cardModal}>
                <div className={classes.cardHeader}>
                  <Avatar
                    style={{ margin: "5px" }}
                    alt={person.name.first + " " + person.name.last}
                    src={person.photo}
                  />
                  <br />
                  <Typography
                    align="center"
                    style={{ width: "50%" }}
                    variant="h6"
                  >
                    {person.name.first + " " + person.name.last}
                  </Typography>
                </div>
                <div className={classes.ModalBody}>
                  {person.roles.map((data, index) => {
                    return (
                      <li key={index}>
                        <Chip label={data} className={classes.chip} />
                      </li>
                    );
                  })}
                  {props.captain ? (
                    <li>
                      <Chip label={"Captain"} className={classes.chip} />
                    </li>
                  ) : (
                    ""
                  )}
                  <Typography variant="body1">{person.bio}</Typography>
                </div>
              </div>
              <Button onClick={handleClose} className={classes.close}>
                Close
              </Button>
            </Paper>
          </MuiFade>
        </Modal>
      </Card>
    </Fade>
  );
}
