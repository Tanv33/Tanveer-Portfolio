import styled from "styled-components";

/* Sources span 1.50 (the 3:2 webp marketing composites) to 2.13 (raw
   screenshots), so no ratio fits all. 16:9 splits the difference: it crops the
   composites ~8% top/bottom and the widest screenshots ~8% left/right, instead
   of taking 25% off either. Normalise the assets to one ratio and this can be
   tightened. */
export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  /* Cards used to be sized by their cover image. Without it, stretch to a
     uniform height and pin the links to the bottom so rows stay even. */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: ${({ hasImage }) => (hasImage ? "0" : "2rem")};
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: none;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: 3rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  margin-top: auto;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  /* 5-tag stacks overflowed the card on narrow viewports with space-around
   and no wrapping. */
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem 1.2rem;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
