import React from "react";
import { Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function Detail({ details }) {
  return (
    <ul
      style={{
        "list-style": "none",
        padding: 0,
        margin: "0.5rem 0 0 1rem",
        fontSize: "1.1rem",
      }}
    >
      {details.map((detail) => (
        <li style={{ display: "flex", alignItems: "center" }}>
          <FiberManualRecordIcon
            style={{
              width: "0.8rem",
              height: "0.8rem",
              marginRight: "0.5rem",
            }}
          />
          <Typography>{detail}</Typography>
        </li>
      ))}
    </ul>
  );
}
