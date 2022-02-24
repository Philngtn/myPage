import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #ffffff;
`;

export const FooterWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 300px;
  width: 100%;
  max-width: 2200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  padding: 0 15px;
  grid-area: col3;
`;

export const FooterRows = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(1fr, 1fr, 1fr);
  grid-template-areas: "col1 col2 col3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2" "col3";
  }
`;

export const IconRows = styled.div`
  padding-top: 20px;
  display: grid;
  grid-auto-columns: minmax(50px, 50px);
  align-items: center;
  grid-template-areas: "icon1 icon2";
  font-size: 2rem;
`;

export const Icon1 = styled.a`
  margin-bottom: 15px;
  grid-area: icon1;
  color: #ff0000;
`;

export const Icon2 = styled.a`
  margin-bottom: 15px;
  grid-area: icon2;
  color: #0077b5;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 0px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 700;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  max-width: 1400px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 30px;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
