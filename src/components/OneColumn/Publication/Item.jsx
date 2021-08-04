import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Detail from "../../Detail";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function Item({ url, title, author, journal, details }) {
  const matches = useMediaQuery("(max-width:960px)");
  const titleStyle = matches
    ? { margin: "0 0 0.5rem", fontSize: "1.25rem" }
    : { margin: "0 0 0.5rem" };
  const captionStyle = matches ? { fontSize: "0.80rem" } : { fontSize: "1rem" };
  const rowStyle = matches ? { padding: "0.2rem 0" } : { padding: "1rem 0" };
  const animatedItem = {
    title: useScrollFadeIn("down"),
    author: useScrollFadeIn("caption"),
    journal: useScrollFadeIn("caption"),
  };

  return (
    <div style={rowStyle}>
      <Typography
        ref={animatedItem.title.ref}
        variant="h5"
        style={{ ...titleStyle, ...animatedItem.title.style }}
      >
        <a target="_blank" href={url} rel="noopener noreferrer">
          {title}
        </a>
      </Typography>
      <Typography
        ref={animatedItem.author.ref}
        style={{
          ...animatedItem.author.style,
          ...captionStyle,
          display: "block",
        }}
      >
        {author}
      </Typography>
      <Typography
        ref={animatedItem.journal.ref}
        style={{ ...captionStyle, ...animatedItem.journal.style }}
      >
        {journal}
      </Typography>
      <Detail details={details} />
    </div>
  );
}
