import React from "react";

export default function ColorHead({ children, color = "#3EB489" }) {
  return <div style={{ display: "inline", color: color }}>{children}</div>;
}
