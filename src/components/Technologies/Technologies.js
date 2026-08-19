import React from "react";
import { FaCubes, FaDocker, FaServer } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      From Solana programs in Rust and Anchor to the Node.js services, data
      models and infrastructure around them.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaCubes size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Solana, Rust, Anchor
            <br />
            PDAs, CPIs, Token Programs
            <br />
            Metaplex, Bubblegum
            <br />
            Borsh Serialization
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, Fastify
            <br />
            NestJS, TypeScript
            <br />
            GraphQL, WebSockets
            <br />
            PostgreSQL, MongoDB, Redis
            <br />
            Prisma, BullMQ, Microservices
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps &amp; Front-End</ListTitle>
          <ListParagraph>
            Docker, CI/CD, GitHub Actions
            <br />
            AWS, GCP, DigitalOcean
            <br />
            Prometheus, Jest, TDD
            <br />
            Next.js, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
