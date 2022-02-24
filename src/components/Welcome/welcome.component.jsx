import React from "react";
import Video from "../../videos/video.mp4";
import {
  WelcomeContainer,
  WelcomeBg,
  VideoBg,
  WelcomeContent,
  WelcomeTopLine,
  WelcomeH1,
  WelcomeP,
} from "./welcome.style";

export const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeTopLine>I am</WelcomeTopLine>
        <WelcomeH1>Phil Nguyen</WelcomeH1>
        <WelcomeP>
          Contemplative coder and analyst. Inspired by tough problems.
        </WelcomeP>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default WelcomeSection;
