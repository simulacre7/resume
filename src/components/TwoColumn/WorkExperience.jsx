import React from "react";
import Project from "./Project";
import Row from "./Row";
import RowLeftCell from "./RowLeftCell";
import RowRightCell from "./RowRightCell";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../ColorHead";

export default function WorkExperience() {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={titleStyle}>
        <ColorHead>Wor</ColorHead>k Experience<ColorHead>.</ColorHead>
      </Typography>

      <Row>
        <RowLeftCell
          companyName="티맥스소프트"
          position="Researcher"
          time="2020.02-현재"
        />
        <RowRightCell>
          <Project
            isFirst
            title="사내 프론트엔드 모듈 개발"
            time="2021.01-현재"
            description="어쩌구 저쩌구 유지보수 개선 및 개발 연구하고 있습니다."
            did={["1st item", "2nd item", "3rd item"]}
            techStack="Typescript, React, Sass"
          />
          <Project
            isFirst
            title="AutoML 프론트엔드 개발"
            time="2020.02-현재"
            description="어쩌구 저쩌구 유지보수 개선 및 개발 연구하고 있습니다."
            did={["1st item", "2nd item", "3rd item"]}
            techStack="Typescript, React, Sass"
          />
        </RowRightCell>
      </Row>
    </section>
  );
}
