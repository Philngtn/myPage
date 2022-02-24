import React from "react";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-4.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./Otherplatfroms.style";

export const OtherPlatforms = () => {
  return (
    <ServicesContainer id="other">
      <ServicesH1>Other Platforms</ServicesH1>
      <ServicesWrapper>
        <ServicesCard href="https://github.com/Philngtn">
          <ServicesIcon src={Icon1} />
          <ServicesH2>GitHub</ServicesH2>
          <ServicesP>My beloved codebase</ServicesP>
        </ServicesCard>
        <ServicesCard href="https://share.streamlit.io/philngtn/streamlit/app.py">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Streamlit</ServicesH2>
          <ServicesP>Let's talk about data science</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
