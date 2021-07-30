import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import "./RowLeft.scss";

const leftStyle = { flexBasis: "18rem", paddingRight: "1rem", flexShrink: 0 };

export default function RowLeftCell({
  children,
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
  return (
    <div className="row-left">
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
