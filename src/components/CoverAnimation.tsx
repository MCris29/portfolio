import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CoverAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initAnimation();
  }, []);

  const initAnimation = () => {
    gsap.set("#navigation", {
      opacity: 0,
    });

    gsap.set("#title_cover", {
      opacity: 0,
      y: 50,
    });

    const itemFrontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#navigation",
        start: () => "top center",
        end: () => `+=${window.innerHeight}`,
      },
    });

    itemFrontendTl.to("#navigation", {
      opacity: 1,
      ease: "linear",
    });

    itemFrontendTl.to("#title_cover", {
      y: 0,
      opacity: 1,
      ease: "linear",
    });
  };
  return <></>;
};

export default CoverAnimation;
