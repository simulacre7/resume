import React from "react";
import { Typography } from "@material-ui/core";
import "./Detail.scss";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function DetailItem({ children, key }) {
  const animatedItem = {
    item: useScrollFadeIn("down"),
  };
  return (
    <li key={key} {...animatedItem.item}>
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
