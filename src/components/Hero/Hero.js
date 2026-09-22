import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ButtonRow, HeroNote, LeftSection } from "./HeroStyles";
import { GmailComposeUrl, MailToUrl } from "../../constants/constants";
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
          <LinkButton href={GmailComposeUrl} target="_blank">
            Let's Talk
          </LinkButton>
          {/* Resume button and its freshness note are hidden, not deleted —
              ResumeUrl and ResumeUpdated still live in constants.js, so
              restoring this is uncommenting it.
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
          */}
        </ButtonRow>
        <HeroNote>
          Not a Gmail user? <a href={MailToUrl}>Mail me from your own app</a>
          {/* <br />Resume last updated {ResumeUpdated} */}
        </HeroNote>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
