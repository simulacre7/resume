import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../../ColorHead";
import Item from "./Item";

export default function Publication() {
  const matches = useMediaQuery("(max-width:960px)");
  const pubStyle = matches
    ? { fontSize: "2.4rem", marginBottom: "1rem" }
    : { marginBottom: "1rem" };
  const sectionStyle = matches
    ? { padding: "0 2rem", marginTop: "2.5rem" }
    : { padding: "0 2rem", marginTop: "4rem" };

  return (
    <section style={sectionStyle}>
      <Typography variant="h3" style={{ ...pubStyle }}>
        <ColorHead>Pub</ColorHead>lications
      </Typography>
      <Item
        title="An Empirical Analysis on Transparent Algorithmic Exploration in Recommender Systems"
        url="https://arxiv.org/abs/2108.00151"
        author={<b>Kihwan Kim</b>}
        journal={`A Computing Research Repository (CoRR), 2108.00151, 2021`}
        details={[
          "추천 시스템에서 사용자 취향을 파악하기 위한 랜덤 아이템들을 어떻게 전달해야 할까?",
          "실험 환경으로 사용된 웹 기반 영화 추천 시스템 구현",
          "사용자 로그의 가치를 AI 측면에서 평가하는 metric 제안",
          "추천시스템의 Explore-Exploit 문제에서 투명성이 데이터의 품질에 미치는 영향을 측정",
          "94명의 피험자를 Amazon MTurk에서 구인",
          "피험자들에게 넷플릭스와 유사한 실험 환경을 이용하도록 하여, 실사용 로그 데이터와 설문 응답을 수집",
        ]}
      />
      <Item
        title="ST-GRAT: A Novel Spatio-temporal Graph Attention Networks for Accurately Forecasting Dynamically Changing Road Speed"
        url="https://dl.acm.org/doi/10.1145/3340531.3411940"
        author={
          <>
            Cheonbok Park, Chunggi Lee, Hyojin Bahng, Yunwon Tae,
            <b> Kihwan Kim</b>, Seungmin Jin, Sungahn Ko, Jaegul Choo
          </>
        }
        journal={`ACM International Conference on Information and Knowledge Management (CIKM), 2020`}
        details={[
          "한국도로공사의 도로 바닥에 설치된 차량 감지 센서 데이터를 전처리",
          "Attention이 효과적으로 동작한 경우들을 패턴 별로 묶어 카테고리화",
        ]}
      />
      <Item
        title="Modeling Exploration/Exploitation Decisions through Mobile Sensing for Understanding Mechanisms of Addiction"
        url="https://dl.acm.org/citation.cfm?doid=3307334.3328599"
        author={
          <>
            <b>Kihwan Kim</b>, Sanghoon Kim, Chunggi Lee, Sungahn Ko
          </>
        }
        journal={`ACM International Conference on Mobile Systems, Applications, and Services (MobiSys), 2019`}
        details={[
          "Inverse Reinforcement Learning을 통해, 스마트폰 사용 로그로 중독 질환 여부를 감지하는 시스템을 제안",
        ]}
      />
      <Item
        title="An Empirical Study on the Relationship Between the Number of Coordinated Views and Visual Analysis"
        url="https://arxiv.org/abs/2108.00151"
        author={
          <>
            Juyoung Oh, Chunggi Lee, Hwiyeon Kim,<b> Kihwan Kim</b>, Osang Kwon,
            Eric D. Ragan, Bum Chul Kwon, Sungahn Ko
          </>
        }
        journal={`A Computing Research Repository (CoRR), 2204.09524, 2018`}
        details={[
          "시각화 차트의 갯수가 데이터의 시각적 분석에 어떤 영향을 미치는지 실험",
          "44명 피험자에게 시각적 분석 도구를 주고, 데이터 분석 과제를 풀도록 함",
          "Think-aloud 프로토콜과 녹화된 화면, 그리고 로그 데이터를 통해 사용자의 분석 패턴을 카테고리화",
          "차트의 갯수와 과제 점수 간 양의 상관관계를 관찰",
        ]}
      />
      <Item
        title="시각화 기반 딥러닝 분석 기술"
        url="http://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07266060&language=ko_KR"
        author={
          <>
            이재성, <b>김기환</b>, 이충기, 고성안
          </>
        }
        journal={`소음진동 제27권 제6호 2017.11`}
        details={["딥 러닝 모델을 해석하기 위한 시각화 기법들을 정리 및 조사"]}
      />
    </section>
  );
}
