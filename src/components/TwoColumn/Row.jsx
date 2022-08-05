import React from "react";
import { useMediaQuery } from "@material-ui/core";

export default function Row({ children }) {
  const matches = useMediaQuery("(max-width:960px)");
  const containerStyle = matches
    ? {
        display: "flex",
        padding: "1rem 0",
        //borderBottom: "1px solid #eee",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        msFlexDirection: "column",
        flexDirection: "column",
      }
    : { display: "flex", padding: "1rem 0" /*borderBottom: "1px solid #eee"*/ };

  return <div style={containerStyle}>{children}</div>;
}
