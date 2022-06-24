import React from "react";
import { Typography } from "@material-ui/core";

export default function Badge({ children, style }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(227, 245, 239, 0.5)",
        color: "teal",
        borderRadius: "1.5rem",
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
