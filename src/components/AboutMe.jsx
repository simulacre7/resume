import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "./ColorHead";

export default function AboutMe() {
  const matches = useMediaQuery("(max-width:960px)");
  let greetingStyle = matches ? { fontSize: "1rem" } : { fontSize: "1.2rem" };
  let titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  return (
    <section style={{ padding: "0 2rem" }}>
      <Typography variant="h3" style={titleStyle}>
        <ColorHead>Abo</ColorHead>ut me<ColorHead>.</ColorHead>
      </Typography>
      <Typography style={greetingStyle}>
        반갑습니다. 저는 프론트엔드 개발자 김기환입니다. 인간과 AI 사이
        상호작용을 개선하는 일을 해오고 있습니다. 현재는 블랙박스 모델의 해석을
        돕는 데이터 시각화 기법을 연구 중 입니다. 과거에는 사용자 로그 데이터의
        가치를 AI 측면에서 평가하고, 이를 통해 더 나은 인터페이스가 무엇인지를
        비교하는 연구를 수행했습니다.
      </Typography>
    </section>
  );
}
