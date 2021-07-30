import React from "react";
import { useMediaQuery } from "@material-ui/core";

export default function Row({ children }) {
  const matches = useMediaQuery("(max-width:960px)");
  let containerStyle = matches
    ? {
        display: "flex",
        padding: "3rem 0",
        borderBottom: "1px solid #eee",
        webkitBoxOrient: "vertical",
        webkitBoxDirection: "normal",
        msFlexDirection: "column",
        flexDirection: "column",
      }
    : { display: "flex", padding: "3rem 0", borderBottom: "1px solid #eee" };

  return <div style={containerStyle}>{children}</div>;
}
