import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Detail from "../../Detail";

const rowStyle = {
  padding: "3rem 0",
  borderBottom: "1px solid #eee",
};
export default function Item({ title, details }) {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { margin: "0 0 0.5rem", fontSize: "1.25rem" }
    : { margin: "0 0 0.5rem", fontSize: "2rem" };

  return (
    <div style={rowStyle}>
      <Typography variant="h5" style={titleStyle}>
        {title}
      </Typography>
      <Detail details={details} />
    </div>
  );
}
