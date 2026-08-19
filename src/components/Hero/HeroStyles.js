import styled from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
`;

/* States how old the linked PDF is, so a visitor can judge it without opening
   it. Sourced from ResumeUpdated in constants.js. */
export const ResumeNote = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 80px;

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
