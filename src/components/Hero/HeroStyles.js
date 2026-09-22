import styled from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* The primary and secondary variants differ in height, so centre them
     rather than letting them hang from a shared top edge. */
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

/* Small print under the button: the mailto: escape hatch for anyone the Gmail
   compose link would send to a sign-in wall. Also carried the resume freshness
   line before that button was hidden. */
export const HeroNote = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 80px;

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    margin-bottom: 32px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
