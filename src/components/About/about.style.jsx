import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 550px;
  width: 100%;
  max-width: 2000px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 10px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col2;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
  align-items: center;
  height: 500px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col2 col1'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f7f7fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  max-width: 1600px;
  font-size: 18px;
  line-height: 30px;
  color: ${({ lightText }) => (lightText ? "#f7f7fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 700px;
  text-align: center;
  height: 100%;
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
