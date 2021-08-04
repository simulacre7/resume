import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Detail from "../Detail";
import Badge from "../Badge";

export default function Project({
  title,
  time,
  description,
  did,
  techStack,
  isFirst = false,
}) {
  const matches = useMediaQuery("(max-width:960px)");
  const firstStyle = matches
    ? { paddingTop: "0.2rem", paddingBottom: "0.2rem" }
    : { paddingBottom: "1.5rem" };
  const otherStyle = { padding: "1.5rem 0" };

  const titleStyle = matches
    ? { marginBottom: "0.5rem", fontSize: "1.25rem" }
    : { marginBottom: "0.5rem", fontSize: "2.0rem" };
  const detailStyle = matches
    ? { fontSize: "0.75rem" }
    : { fontSize: "0.9rem" };

  return (
    <div style={isFirst ? firstStyle : otherStyle}>
      <Typography variant="h4" style={titleStyle}>
        {title}
      </Typography>
      <Typography style={{ marginBottom: "1rem" }}>{time}</Typography>
      <Typography style={{ marginBottom: "1rem" }}>{description}</Typography>
      <Detail details={did} />
      {techStack.map((tech, index) => (
        <Badge key={`tech-${index}`} style={detailStyle}>
          {tech}
        </Badge>
      ))}
    </div>
  );
}
