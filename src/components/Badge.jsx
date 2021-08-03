import React from "react";
import { Typography } from "@material-ui/core";

export default function Badge({ children, style }) {
  return (
    <div
      style={{
        backgroundColor: "#e3f5ef",
        color: "teal",
        borderRadius: "0.2rem",
        margin: "0.1rem",
        paddingTop: "0.2rem",
        paddingBottom: "0.3rem",
        paddingRight: "0.66rem",
        paddingLeft: "0.66rem",
        display: "inline-flex",
      }}
    >
      <Typography style={style}>{children}</Typography>
    </div>
  );
}
