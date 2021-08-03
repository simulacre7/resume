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
        <ColorHead>Edu</ColorHead>cation
      </Typography>

      <Row>
        <RowLeftCell
          companyName="울산과학기술원 (UNIST)"
          position="컴퓨터공학 석사"
          time="2018.03&ndash;2020.02"
          position2="기술경영학 학사 (컴퓨터공학 융합전공)"
          time2="2013.03&ndash;2018.02"
        />
        <RowRightCell>
          <Project
            isFirst
            title="AI 중심 UI/UX 설계"
            time="2019.01&ndash;2020.02"
            description={
              <>
                "어떻게 UI를 구성해야 사용자의 취향이 담긴 데이터를 더 잘 수집할
                수 있을까?"라는 질문에 답하는 연구를 수행하였습니다.
              </>
            }
            did={[
              "실험 환경으로 사용된 웹 기반 영화 추천 시스템 구현",
              "사용자 로그의 가치를 AI 측면에서 평가하는 metric 제안",
              "추천시스템의 Explore-Exploit 문제에서 투명성이 데이터의 품질에 미치는 영향을 측정",
            ]}
            techStack={["Python", "Flask", "jQuery", "Surprise"]}
          />
          <Project
            title="사용자 행동 모델링"
            time="2019.02&ndash;현재"
            description="설명2"
            did={["Association Rule", "Inverse Reinforcement Learning"]}
            techStack={["Python", "TensorFlow", "Keras", "scikit-learn"]}
          />
        </RowRightCell>
      </Row>
    </section>
  );
}
