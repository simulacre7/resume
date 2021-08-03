import React from "react";
import { Typography } from "@material-ui/core";
import "./Detail.scss";

export default function Detail({ details }) {
  return (
    <div className="detail-container">
      <ul>
        {details.map((detail, index) => (
          <li key={`detail-${index}`}>
            <Typography>{detail}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}
