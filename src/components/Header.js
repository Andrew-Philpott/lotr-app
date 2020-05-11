import React from "react";
import * as routes from "../constants/routes";

export const Header = () => {
  return (
    <div style={{ width: "100%", height: "70px" }}>
      <a href={routes.NEW_CHARACTER}>Add character</a>
    </div>
  );
};
