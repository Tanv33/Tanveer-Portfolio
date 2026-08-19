import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  GithubUrl,
  LinkedInUrl,
  Location,
  MediumUrl,
  MobileNumber,
  MobileNumberTel,
  PersonalEmail,
  TwitterUrl,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${MobileNumberTel}`}>{MobileNumber}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${PersonalEmail}`}>{PersonalEmail}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Based in</LinkTitle>
          <LinkItem as="span">{Location}</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Blockchain &amp; Backend Engineer &mdash; open to remote, hybrid or
            relocation
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={GithubUrl} target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedInUrl} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={TwitterUrl} target="_blank">
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href={MediumUrl} target="_blank">
            <FaMedium size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
