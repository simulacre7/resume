import React from "react";
import { Typography } from "@material-ui/core";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Badge({ children, style }) {
  const animatedItem = {
    badge: useScrollFadeIn("down"),
  };
  return (
    <div
      ref={animatedItem.badge.ref}
      style={{
        ...animatedItem.badge.style,
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
