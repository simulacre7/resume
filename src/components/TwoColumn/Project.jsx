import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Detail from "../Detail";
import Badge from "../Badge";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

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

  const animatedItem = {
    title: useScrollFadeIn("down"),
    time: useScrollFadeIn("down"),
    description: useScrollFadeIn("down"),
  };

  return (
    <div style={isFirst ? firstStyle : otherStyle}>
      <Typography
        ref={animatedItem.title.ref}
        variant="h4"
        style={{ ...titleStyle, ...animatedItem.title.style }}
      >
        {title}
      </Typography>
      <Typography
        ref={animatedItem.time.ref}
        style={{ ...animatedItem.time.style, marginBottom: "1rem" }}
      >
        {time}
      </Typography>
      <Typography
        ref={animatedItem.description.ref}
        style={{ ...animatedItem.description.style, marginBottom: "1rem" }}
      >
        {description}
      </Typography>
      <Detail details={did} />
      {techStack.map((tech, index) => (
        <Badge key={`tech-${index}`} style={detailStyle}>
          {tech}
        </Badge>
      ))}
    </div>
  );
}
