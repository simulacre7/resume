import React from "react";
import AboutMe from "./components/AboutMe";
import Name from "./components/Name";
import WorkExperience from "./components/TwoColumn/WorkExperience";
import Education from "./components/TwoColumn/Education";
import Publication from "./components/OneColumn/Publication/Publication";
import Skills from "./components/OneColumn/Skills/Skills";

function App() {
  return (
    <div style={{ width: "100%", maxWidth: "50rem", margin: "auto" }}>
      <Name />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Publication />
      <Skills />
      <div style={{ height: "10rem" }} />
    </div>
  );
}

export default App;
