import React from "react";
import { Typography } from "@material-ui/core";
import "./Detail.scss";

function DetailItem({ children }) {
  return (
    <li>
      <Typography>{children}</Typography>
    </li>
  );
}

export default function Detail({ details }) {
  return (
    <div className="detail-container">
      <ul>
        {details.map((detail, index) => (
          <DetailItem key={`detail-${index}`}>{detail}</DetailItem>
        ))}
      </ul>
    </div>
  );
}
