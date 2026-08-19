import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  /* auto-fit, not repeat(4): the GitHub followers tile is appended at runtime,
     so the count is 3 or 4 and a fixed 4-track grid leaves a hole when the
     API is rate-limited. */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: auto;
    min-height: 110px;
    padding: 12px;
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
