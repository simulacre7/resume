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
        title="프론트엔드"
        details={[
          "Visual analytics 도구 개발; Shneiderman's mantra (overview first, zoom and filter, details on demand)에 기반한 설계",
          "XAI (Ex: Shap, PDP, Local Surrogate Model...)",
          "UI를 사용자 측면에서 바라볼 뿐만 아니라, AI 측면에서의 implicit feedback 수집용으로도 바라볼 줄 안다.",
          "ES6 이상 문법을 적극 사용합니다.",
          "타입스크립트를 사용해 개발할 수 있습니다.",
          "Vanilla JS 를 이용해 DOM 을 조작할 수 있습니다.",
          "React hooks를 능숙하게 사용하고, 거의 모든 컴포넌트를 함수로 만듭니다. hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해 사용할 수 있습니다.",
          "컴포넌트 라이프 사이클을 알고 있으며 관련 메소드를 상황에 따라 적절히 사용합니다.",
          "Context API, Recoil을 사용해 상태 관리 및 데이터 모델링을 할 수 있습니다.",
        ]}
      />

      <Item
        title="백엔드"
        details={[
          "Flask를 활용하여 간단한 웹 서버를 구축할 수 있습니다.",
          "MongoDB, SQLite3, Tibero 등 관계형 및 비관계형 데이터베이스를 다룰 줄 압니다.",
        ]}
      />

      <Item
        title="기계학습"
        details={[
          "TensorFlow, Keras 등을 활용한 딥러닝 구현 가능",
          "XGBoost, AutoScikit 등을 활용한 정형데이터 기반 머신러닝 모델 구현 가능",
        ]}
        isLast
      />
    </section>
  );
}
