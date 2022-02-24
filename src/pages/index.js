import React, { useState } from "react";
import { SideBar } from "../components/Scroll_bar/scroll_bar.component";
import { Navbar } from "../components/Navbar/navbar.component";
import { WelcomeSection } from "../components/Welcome/welcome.component";
import { About } from "../components/About/about.component";
import { aboutObj } from "../components/About/about.data";
import { OtherPlatforms } from "../components/OtherPlatforms/Otherplatforms.component";
import { Footer } from "../components/Footer/footer.component";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <WelcomeSection />
      <About {...aboutObj} />
      <OtherPlatforms />
      <Footer />
    </div>
  );
};
