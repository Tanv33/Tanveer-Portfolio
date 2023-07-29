import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Tanveer Khan
        </SectionTitle>
        <SectionText>
          A Full Stack Backend Developer specializing in scalable server-side
          applications with Node.js. Proficient in Next.js and React.js for
          seamless web development.
        </SectionText>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,margin: "0 0 80px" }}>
          <Button alt="upwork" onClick={handleClickUpwork}>
            Upwork
          </Button>
          <Button alt="fiverr" onClick={handleClickFiverr}>
            Fiverr
          </Button>
          <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
