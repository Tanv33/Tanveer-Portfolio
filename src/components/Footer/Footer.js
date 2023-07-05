import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

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
  BusinessEmail,
  FacebookUrl,
  GithubUrl,
  LinkedInUrl,
  MobileNumber,
  PersonalEmail,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${MobileNumber}`}>{MobileNumber}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${PersonalEmail}`}>{PersonalEmail}</LinkItem>
          <LinkItem href={`mailto:${BusinessEmail}`}>{BusinessEmail}</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating multiple project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={GithubUrl} target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedInUrl} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={FacebookUrl} target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
