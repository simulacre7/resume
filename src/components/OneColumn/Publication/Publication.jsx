import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../../ColorHead";
import Item from "./Item";

export default function Publication() {
  const matches = useMediaQuery("(max-width:960px)");
  let pubStyle = matches
    ? { fontSize: "2.4rem", marginBottom: "1rem" }
    : { marginBottom: "1rem" };

  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={pubStyle}>
        <ColorHead>Pub</ColorHead>lication
      </Typography>
      <Item
        title="An Empirical analysis on Transparent Algorithmic Exploration in Recommender Systems"
        url="https://arxiv.org/abs/2108.00151"
        author={<b>Kihwan Kim</b>}
        journal={`A Computing Research Repository (CoRR), 2108.00151, 2021`}
        details={[
          "추천 시스템에서 사용자 취향을 파악하기 위한 랜덤 아이템들을 어떻게 전달해야 할까?",
          "실험 환경으로 사용된 웹 기반 영화 추천 시스템 구현",
          "사용자 로그의 가치를 AI 측면에서 평가하는 metric 제안",
          "추천시스템의 Explore-Exploit 문제에서 투명성이 데이터의 품질에 미치는 영향을 측정",
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
          "도로 및 통행 데이터 전처리",
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
          "성실하게 노동했음을 호소하는 문구가 필요합니다.",
          "무언가를 배웠음도 호소합니다.",
          "어쩌구 저쩌구 머시기가 두시기",
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
        details={[
          "성실하게 노동했음을 호소하는 문구가 필요합니다.",
          "무언가를 배웠음도 호소합니다.",
          "어쩌구 저쩌구 머시기가 두시기",
        ]}
      />
    </section>
  );
}
