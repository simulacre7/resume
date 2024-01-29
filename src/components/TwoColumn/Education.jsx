import React from "react";
import Project from "./Project";
import Row from "./Row";
import RowLeftCell from "./RowLeftCell";
import RowRightCell from "./RowRightCell";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../ColorHead";

export default function Education() {
  const matches = useMediaQuery("(max-width:960px)");
  const titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  const sectionStyle = matches
    ? { padding: "0 2rem", marginTop: "2.5rem" }
    : { padding: "0 2rem", marginTop: "4rem" };

  return (
    <section style={sectionStyle}>
      <Typography variant="h3" style={{ ...titleStyle }}>
        <ColorHead>Edu</ColorHead>cation
      </Typography>

      <Row>
        <RowLeftCell
          companyName="울산과학기술원 (UNIST)"
          position="컴퓨터공학 석사"
          time="2018.03&ndash;2020.02"
          position2={
            matches
              ? "기술경영학 학사"
              : "기술경영학 학사 (컴퓨터공학 융합전공)"
          }
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
              "추천시스템의 Explore-Exploit 문제에서 투명성이 데이터의 품질에 미치는 영향을 측정",
              "사용자 로그의 가치를 AI 측면에서 평가하는 metric 제안",
              "실험 환경용 웹 기반 영화 추천 시스템 구현",
            ]}
            techStack={["Python", "Flask", "jQuery", "Surprise"]}
          />
          <Project
            title="웹 사용자 행동 모델링"
            time="2019.02&ndash;2020.02"
            description={
              <>
                웹 환경에서 사용자의 행동 패턴을 파악하고 이를 모델링하는 연구를
                했습니다.
              </>
            }
            did={[
              <>
                역강화학습 &mdash; <i>(Inverse Reinforcement Learning)</i>{" "}
                방법론을 통해, 사용자들의 행동 이력으로 사용자의 보상 함수를
                추정
              </>,
              "Tableau와 같은 데이터 분석 도구, 위키피디아 문서 기반 역사 교육 도구, 카드 게임과 같은 다양한 웹 환경을 다룸",
            ]}
            techStack={["Python", "TensorFlow", "Keras", "scikit-learn"]}
          />
        </RowRightCell>
      </Row>
    </section>
  );
}
