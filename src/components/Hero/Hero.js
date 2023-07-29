import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, UpworkUrl } from "../../constants/constants";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
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
        <div>
          <Button onClick={handleClickUpwork}>Upwork</Button>
          <Button onClick={handleClickFiverr}>Fiverr</Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
