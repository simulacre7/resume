import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "./ColorHead";

export default function Name() {
  const matches = useMediaQuery("(max-width:960px)");
  let nameStyle = matches
    ? { margin: ".67em 0", fontSize: "3rem" }
    : { margin: ".67em 0" };
  return (
    <section style={{ padding: "0 2rem" }}>
      <Typography variant="h1" style={nameStyle}>
        <ColorHead>&#60;</ColorHead>김기환<ColorHead>&#47;&#62;</ColorHead>
      </Typography>
    </section>
  );
}
