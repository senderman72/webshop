import React from "react";
import {
  HeroWrapper,
  VideoBackground,
  HeroContent,
  HeroTitle,
  HeroButton,
} from "../styled/styledHome/StyledHero";

import HeroVideo from "../../assets/Hero.mp4";
import { Link } from "react-router";

const Hero = () => {
  return (
    <HeroWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={HeroVideo} type="video/mp4" />
        Din webbläsare stödjer inte videon.
      </VideoBackground>
      <HeroContent>
        <HeroTitle>Kvalitet till rätt pris</HeroTitle>
        <Link to="/products">
          <HeroButton>Shoppa nu</HeroButton>
        </Link>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
