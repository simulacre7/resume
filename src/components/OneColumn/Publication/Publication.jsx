import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "../../ColorHead";
import Item from "./Item";

export default function Publication() {
  const matches = useMediaQuery("(max-width:960px)");
  let pubStyle = matches ? { fontSize: "2.4rem" } : {};

  return (
    <section style={{ padding: "0 2rem", marginTop: "4rem" }}>
      <Typography variant="h3" style={pubStyle}>
        <ColorHead>Pub</ColorHead>lication<ColorHead>.</ColorHead>
      </Typography>
      <Item
        title="ST-GRAT: A Novel Spatio-temporal Graph Attention Networks for Accurately Forecasting Dynamically Changing Road Speed"
        url="https://dl.acm.org/doi/10.1145/3340531.3411940"
        author={
          <>
            Cheonbok Park, Chunggi Lee, Hyojin Bahng, Yunwon Tae,{" "}
            <b>Kihwan Kim</b>, Seungmin Jin, Sungahn Ko, Jaegul Choo
          </>
        }
        journal={`ACM International Conference on Information and Knowledge Management (CIKM), 2020`}
        details={[
          "성실하게 노동했음을 호소하는 문구가 필요합니다.",
          "무언가를 배웠음도 호소합니다.",
          "살짝은 솔직한 개인사스러운 부분도 적는다면?",
        ]}
      />
      <Item
        title="An Empirical Study on Disclosing Exploratory Items in Recommender Systems"
        url="https://drive.google.com/file/d/1SCT9BwfE9l5fXIGaOyH8vUkVLMCGIqTu/view?usp=sharing"
        author={<b>Kihwan Kim</b>}
        journal={`Master Thesis @ UNIST`}
        details={[
          "성실하게 노동했음을 호소하는 문구가 필요합니다.",
          "무언가를 배웠음도 호소합니다.",
          "살짝은 솔직한 개인사스러운 부분도 적는다면?",
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
          "살짝은 솔직한 개인사스러운 부분도 적는다면?",
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
          "살짝은 솔직한 개인사스러운 부분도 적는다면?",
        ]}
      />
    </section>
  );
}
