import React from "react";

export default function Badge({ children, style }) {
  return (
    <div
      style={{
        ...style,
        backgroundColor: "#e3f5ef",
        color: "teal",
        borderRadius: "0.2rem",
        margin: "0.1rem",
        paddingTop: "0.2rem",
        paddingBottom: "0.3rem",
        paddingRight: "0.66rem",
        paddingLeft: "0.66rem",
        display: "inline-flex",
      }}
    >
      {children}
    </div>
  );
}
