import React from "react";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrapper,
  FooterRows,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  Heading,
  Description,
  IconRows,
  Icon1,
  Icon2,
} from "./footer.style";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRows>
          <Column1>
            <TextWrapper>
              <Heading>About This Page</Heading>
              <Description>
                This website was coded in React.JS. It is hosted on a GitHub
                server. The code can be found in my git. Copyright ©2022 All
                rights reserved.
              </Description>
            </TextWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading>Contact Me</Heading>
              <Description>Email: Philngtn@gmail.com</Description>
            </TextWrapper>
          </Column2>
          <Column3>
            <TextWrapper>
              <Heading>Follow Me</Heading>
              <Description>Let's be social</Description>
              <IconRows>
                <Icon1 href="https://www.youtube.com/channel/UCninsV6GcFTJ9lOvq2tjEJg">
                  <FaYoutube />
                </Icon1>
                <Icon2 href="https://www.linkedin.com/in/philngtn/">
                  <FaLinkedinIn />
                </Icon2>
              </IconRows>
            </TextWrapper>
          </Column3>
        </FooterRows>
      </FooterWrapper>
    </FooterContainer>
  );
};
