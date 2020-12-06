import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory, useRouteMatch, useParams, Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `team-tab-${index}`,
    "aria-controls": `tab-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabBar(props: { url: any }) {
  const history = useHistory();
  const handleOnClick = useCallback((link) => history.push(link), [history]);
  const classes = useStyles();

  const teams = ["K", "R", "N", "M", "X"];
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    handleOnClick(newValue);
  };
  const handleCallToRouter = (value) => {
    history.push(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {teams.map((element, index) => (
            <Tab
              label={"7405" + element}
              {...a11yProps(index)}
              value={`${props.url}/7405${element}`}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
