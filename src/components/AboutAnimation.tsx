import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initAnimation();
  }, []);

  const initAnimation = () => {
    console.log("Animacion iniciada");

    gsap.set("#title_about", {
      opacity: 0,
    });

    gsap.set("#section_2", {
      opacity: 0,
    });

    gsap.set("#button_about", {
      scale: 0,
    });

    const itemFrontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-me",
        start: () => "top center",
        end: () => `+=${window.innerHeight}`,
      },
    });

    itemFrontendTl.to("#title_about", {
      opacity: 1,
    });

    itemFrontendTl.to("#section_2", {
      opacity: 1,
    });

    itemFrontendTl.to("#button_about", {
      scale: 1,
      ease: "bounce",
    });
  };

  return <></>;
};

export default AboutAnimation;
