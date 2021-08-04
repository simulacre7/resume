import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import ColorHead from "./ColorHead";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import "./AboutMe.scss";

export default function AboutMe() {
  const matches = useMediaQuery("(max-width:960px)");
  const greetingStyle = matches
    ? { display: "inline", fontSize: "1rem" }
    : { display: "inline", fontSize: "1.2rem" };
  const contactStyle = matches
    ? { fontSize: "0.75rem" }
    : { fontSize: "0.85rem" };
  const titleStyle = matches
    ? { marginBottom: "1rem", fontSize: "2.4rem" }
    : { marginBottom: "1rem" };
  const animatedItem = {
    title: useScrollFadeIn("down"),
    greeting1: useScrollFadeIn("down"),
    greeting2: useScrollFadeIn("down"),
    contact: useScrollFadeIn("down"),
  };
  return (
    <section style={{ padding: "0 2rem" }}>
      <Typography
        ref={animatedItem.title.ref}
        variant="h3"
        style={{ ...titleStyle, ...animatedItem.title.style }}
      >
        <ColorHead>Sum</ColorHead>mary
      </Typography>
      <Typography
        ref={animatedItem.greeting1.ref}
        style={{ ...greetingStyle, ...animatedItem.greeting1.style }}
      >
        반갑습니다.&nbsp;저는 프론트엔드 개발자 김기환입니다.&nbsp;인간과 AI
        사이 상호작용을 개선하는 일을 해오고 있습니다.&nbsp;
      </Typography>
      <Typography
        ref={animatedItem.greeting2.ref}
        style={{ ...greetingStyle, ...animatedItem.greeting3.style }}
      >
        현재는 블랙박스 모델의 해석을 돕는 데이터 시각화 기법을 연구 중
        입니다.&nbsp;과거에는 사용자 로그 데이터의 가치를 AI 측면에서
        평가하고,&nbsp;이를 통해 더 나은 인터페이스가 무엇인지를 비교하는 연구를
        수행했습니다.
      </Typography>

      <div
        ref={animatedItem.contact.ref}
        style={animatedItem.contact.style}
        id="contact"
      >
        <a id="email" href="mailto:juljin1875@gmail.com">
          <Typography style={contactStyle}>juljin1875@gmail.com</Typography>
        </a>
        <a id="github" href="https://github.com/simulacre7/">
          <Typography style={contactStyle}>GitHub</Typography>
        </a>
      </div>
    </section>
  );
}
