import React from "react";
import * as routes from "../constants/routes";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    height: "100px",
    backgroundColor: "#313131",
    borderBottom: "2px solid white",
    justifyContent: "center",
    alignItems: "center",
  },

  headerLinks: {
    display: "flex",
    width: "100%",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headerLinks}></div>
      <div className={classes.headerLinks}></div>
      <div className={classes.headerLinks}></div>
      <div className={classes.headerLinks}></div>
      <div className={classes.headerLinks}>
        <a href={routes.NEW_CHARACTER}>Add character</a>
      </div>
    </div>
  );
};
