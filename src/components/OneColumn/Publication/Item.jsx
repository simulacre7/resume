import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Detail from "../../Detail";

export default function Item({ url, title, author, journal, details }) {
  const matches = useMediaQuery("(max-width:960px)");
  const titleStyle = matches
    ? { margin: "0 0 0.5rem", fontSize: "1.25rem" }
    : { margin: "0 0 0.5rem" };
  const captionStyle = matches ? { fontSize: "0.80rem" } : { fontSize: "1rem" };
  const rowStyle = matches ? { padding: "0.2rem 0" } : { padding: "1rem 0" };

  return (
    <div style={rowStyle}>
      <Typography variant="h5" style={{ ...titleStyle }}>
        <a target="_blank" href={url} rel="noopener noreferrer">
          {title}
        </a>
      </Typography>
      <Typography
        style={{
          ...captionStyle,
          display: "block",
        }}
      >
        {author}
      </Typography>
      <Typography style={{ ...captionStyle }}>{journal}</Typography>
      <Detail details={details} />
    </div>
  );
}
