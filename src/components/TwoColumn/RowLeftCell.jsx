import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";

export default function RowLeftCell({
  companyName,
  position,
  time,
  position2,
  time2,
}) {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { marginBottom: "0.5rem", fontSize: "1.7rem" }
    : { marginBottom: "0.5rem" };
  let containerStyle = matches
    ? {
        flexBasis: "18rem",
        paddingRight: "1rem",
        flexShrink: "0",
        msFlexPreferredSize: "100%",
        flexBasis: "100%",
        paddingRight: "0",
        paddingBottom: "1rem",
      }
    : { flexBasis: "18rem", paddingRight: "1rem", flexShrink: "0" };
  return (
    <div style={containerStyle}>
      <Typography variant="h4" style={titleStyle}>
        {companyName}
      </Typography>
      <Typography style={{ display: "block" }}>{position}</Typography>
      <Typography>{time}</Typography>
      <Typography style={{ display: "block" }}>{position2}</Typography>
      <Typography>{time2}</Typography>
    </div>
  );
}
