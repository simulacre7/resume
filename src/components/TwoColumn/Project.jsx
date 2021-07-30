import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Detail from "../Detail";

export default function Project({
  title,
  time,
  description,
  did,
  techStack,
  isFirst = false,
}) {
  const firstStyle = { paddingBottom: "1.5rem" };
  const otherStyle = { padding: "1.5rem 0" };
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { marginBottom: "0.5rem", fontSize: "1.25rem" }
    : { marginBottom: "0.5rem", fontSize: "2.0rem" };
  let detailStyle = matches ? { fontSize: "1.1rem" } : { fontSize: "1.5rem" };

  return (
    <div style={isFirst ? firstStyle : otherStyle}>
      <Typography variant="h4" style={titleStyle}>
        {title}
      </Typography>
      <Typography style={{ marginBottom: "1rem" }}>{time}</Typography>
      <Typography variant="h5" style={detailStyle}>
        Description
      </Typography>
      <Typography style={{ marginBottom: "1rem" }}>{description}</Typography>
      <Typography variant="h5" style={detailStyle}>
        What did I do
      </Typography>
      <Detail details={did} />
      <Typography variant="h5" style={{ ...detailStyle, marginTop: "1rem" }}>
        Tech Stack
      </Typography>
      <Typography>{techStack}</Typography>
    </div>
  );
}
