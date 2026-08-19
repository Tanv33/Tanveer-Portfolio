import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ButtonRow, LeftSection, ResumeNote } from "./HeroStyles";
import {
  FiverUrl,
  ResumeUpdated,
  ResumeUrl,
  UpworkUrl,
} from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Tanveer
        </SectionTitle>
        <SectionText>
          Blockchain &amp; Backend Engineer. Four years building production
          Node.js backends, the last two writing Solana programs in Rust and
          Anchor.
        </SectionText>
        <ButtonRow>
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
          <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
            Fiverr
          </LinkButton>
        </ButtonRow>
        <ResumeNote>Resume last updated {ResumeUpdated}</ResumeNote>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
