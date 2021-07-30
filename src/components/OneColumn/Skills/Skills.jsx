import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../../ColorHead";
import Item from "./Item";

export default function Skills() {
  const matches = useMediaQuery("(max-width:960px)");
  let skillStyle = matches ? { fontSize: "2.4rem" } : {};

  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={skillStyle}>
        <ColorHead>Ski</ColorHead>lls
      </Typography>
      <Item
        title="Overall"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />

      <Item
        title="Communication"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />

      <Item
        title="React"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />

      <Item
        title="Javascript"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />

      <Item
        title="Tooling"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />

      <Item
        title="DevOps"
        details={[
          "파이어볼을 쏠 줄 압니다.",
          "잠자고 건강을 챙깁니다.",
          "눕는 것을 좋아합니다.",
        ]}
      />
    </section>
  );
}
