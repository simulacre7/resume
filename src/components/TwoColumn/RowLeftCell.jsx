import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function RowLeftCell({
  companyName,
  position,
  time,
  position2,
  time2,
}) {
  const matches = useMediaQuery("(max-width:960px)");
  const titleStyle = matches
    ? { marginBottom: "0.5rem", fontSize: "1.7rem" }
    : { marginBottom: "0.5rem" };
  const containerStyle = matches
    ? {
        flexBasis: "100%",
        paddingRight: "0",
        flexShrink: "0",
        msFlexPreferredSize: "100%",
        paddingBottom: "1rem",
      }
    : { flexBasis: "18rem", paddingRight: "1rem", flexShrink: "0" };
  const animatedItem = {
    company: useScrollFadeIn("down"),
    position: useScrollFadeIn("down"),
    position2: useScrollFadeIn("down"),
    time: useScrollFadeIn("down"),
    time2: useScrollFadeIn("down"),
  };

  return (
    <div style={containerStyle}>
      <Typography
        ref={animatedItem.company.ref}
        variant="h4"
        style={{ ...animatedItem.company.style, ...titleStyle }}
      >
        {companyName}
      </Typography>
      <Typography
        ref={animatedItem.position.ref}
        style={{ ...animatedItem.position.style, display: "block" }}
      >
        {position}
      </Typography>
      <Typography {...animatedItem.time}>{time}</Typography>
      <Typography
        ref={animatedItem.position2.ref}
        style={{ ...animatedItem.position2.style, display: "block" }}
      >
        {position2}
      </Typography>
      <Typography {...animatedItem.time2}>{time2}</Typography>
    </div>
  );
}
