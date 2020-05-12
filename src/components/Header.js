import React from "react";
import * as routes from "../constants/routes";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    height: "100px",
    backgroundColor: "#72593d",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "60%",
    display: "flex",
    width: "100%",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
  },
  headerLinks: {
    display: "flex",
    width: "20%",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Lord of the things</h1>
      </div>
      <div className={classes.headerLinks}></div>
      <div className={classes.headerLinks}>
        <a href={routes.NEW_CHARACTER}>Add character</a>
      </div>
    </div>
  );
};
