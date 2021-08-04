import React from "react";
import Project from "./Project";
import Row from "./Row";
import RowLeftCell from "./RowLeftCell";
import RowRightCell from "./RowRightCell";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../ColorHead";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function WorkExperience() {
  const matches = useMediaQuery("(max-width:960px)");
  const titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  const sectionStyle = matches
    ? { padding: "0 2rem", marginTop: "2.5rem" }
    : { padding: "0 2rem", marginTop: "4rem" };

  const animatedItem = { title: useScrollFadeIn("down") };

  return (
    <section style={sectionStyle}>
      <Typography
        ref={animatedItem.title.ref}
        variant="h3"
        style={{ ...titleStyle, ...animatedItem.title.style }}
      >
        <ColorHead>Exp</ColorHead>erience
      </Typography>

      <Row>
        <RowLeftCell
          companyName="티맥스소프트"
          position="Researcher"
          time="2020.02&ndash;현재"
        />
        <RowRightCell>
          <Project
            isFirst
            title="레거시 시스템 리액트 포팅"
            time="2021.01&ndash;현재"
            description={
              <>
                jQuery 기반 사내 프론트엔드 라이브러리 &mdash; TOP
                <i>(Tmax One Platform)</i>로 구현된 제품들을 리액트로 전환함
              </>
            }
            did={[
              "모듈화가 미흡한 기존 코드를 용도에 맞게 분할하고 인터페이스를 개선",
              "각종 컴포넌트 신규 개발",
            ]}
            techStack={["Typescript", "React", "Sass", "Material-UI"]}
          />
          <Project
            title="AutoML 플랫폼"
            time="2020.02&ndash;현재"
            description="소모적이고 반복적인 기계학습 모델 개발 작업을 자동화해주는 플랫폼을 개발 했습니다."
            did={[
              "비전문가를 위한 Codeless 환경의 개발 스튜디오 구현",
              <>
                설명 가능한 AI &mdash; XAI
                <i>(eXplainable Artificial Intelligence)</i> 기술 연구 및 개발
              </>,
              "컴퓨팅 리소스 관리 도구 개발",
            ]}
            techStack={["Typescript", "React", "Sass", "Material-UI", "Python"]}
          />
        </RowRightCell>
      </Row>
    </section>
  );
}
