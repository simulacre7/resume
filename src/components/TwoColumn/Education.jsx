import React from "react";
import Project from "./Project";
import Row from "./Row";
import RowLeftCell from "./RowLeftCell";
import RowRightCell from "./RowRightCell";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../ColorHead";

export default function Education() {
  const matches = useMediaQuery("(max-width:960px)");
  let titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={titleStyle}>
        <ColorHead>Edu</ColorHead>cation<ColorHead>.</ColorHead>
      </Typography>

      <Row>
        <RowLeftCell
          companyName="울산과학기술원 (UNIST)"
          position="컴퓨터공학 석사"
          time="2018.03-2020.02"
          position2="기술경영학 학사 (컴퓨터공학 융합전공)"
          time2="2013.03-2018.02"
        />
        <RowRightCell>
          <Project
            isFirst
            title="연구1"
            time="2021.01-현재"
            description="노예짓1"
            did={["1st item", "2nd item", "3rd item"]}
            techStack="Typescript, React, Sass"
          />
          <Project
            isFirst
            title="연구2"
            time="2020.02-현재"
            description="노예짓2"
            did={["1st item", "2nd item", "3rd item"]}
            techStack="Typescript, React, Sass"
          />
        </RowRightCell>
      </Row>
    </section>
  );
}
