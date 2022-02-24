import styled from "styled-components";

export const WelcomeContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  /* Add before styles */
`;

export const WelcomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const WelcomeContent = styled.div`
  z-index: 3;
  max-width: 1200;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTopLine = styled.p`
  color: #570091;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const WelcomeH1 = styled.h1`
  margin-top: 5px;
  color: #000;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const WelcomeP = styled.p`
  margin-top: 20px;
  color: #000;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
