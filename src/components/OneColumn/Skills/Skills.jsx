import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ColorHead from "../../ColorHead";
import Detail from "../../Detail";
import Item from "./Item";

const rowStyle = {
  padding: "3rem 0",
  borderBottom: "1px solid #eee",
};

export default function Skills() {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { margin: "0 0 0.5rem", fontSize: "1.25rem" }
    : { margin: "0 0 0.5rem", fontSize: "2rem" };

  let skillStyle = matches ? { fontSize: "2.4rem" } : {};

  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={skillStyle}>
        <ColorHead>Ski</ColorHead>lls<ColorHead>.</ColorHead>
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
