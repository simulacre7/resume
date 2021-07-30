import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Detail from "../../Detail";

const rowStyle = {
  padding: "3rem 0",
  borderBottom: "1px solid #eee",
};

export default function Item({ url, title, author, journal, details }) {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { margin: "0 0 0.5rem", fontSize: "1.25rem" }
    : { margin: "0 0 0.5rem" };
  let captionStyle = matches ? { fontSize: "0.80rem" } : { fontSize: "1rem" };
  let pubStyle = matches ? { fontSize: "2.4rem" } : {};
  return (
    <div style={rowStyle}>
      <Typography variant="h5" style={titleStyle}>
        <a target="_blank" href={url}>
          {title}
        </a>
      </Typography>
      <Typography style={{ ...captionStyle, display: "block" }}>
        {author}
      </Typography>
      <Typography style={captionStyle}>{journal}</Typography>
      <Detail details={details} />
    </div>
  );
}
