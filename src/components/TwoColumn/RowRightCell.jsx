import React from "react";

const rightStyle = { flexGrow: 1 };

export default function RowLeftCell({ children }) {
  return <div style={rightStyle}>{children}</div>;
}
