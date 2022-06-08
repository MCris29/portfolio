import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import CardProject from "./CardProject";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
  const projects = [
    {
      title: " FUHPED",
      description: "",
      image: "/projects/fuhped_page.png",
      link: "https://fuhped.vercel.app/",
      logo: "/projects/fuhped_logo1.png",
      background: "linear-gradient(45deg, #855e96, #f44336)",
    },
    {
      title: " FUHPED",
      description: "",
      image: "/projects/fuhped_page.png",
      link: "https://fuhped.vercel.app/",
      logo: "/projects/fuhped_logo1.png",
      background: "linear-gradient(45deg, #388e3c, #81c784)",
    },
    {
      title: " FUHPED",
      description: "",
      image: "/projects/fuhped_page.png",
      link: "https://fuhped.vercel.app/",
      logo: "/projects/fuhped_logo1.png",
      background: "linear-gradient(45deg, #1976d2, #FF9800)",
    },
    {
      title: " FUHPED",
      description: "",
      image: "/projects/fuhped_page.png",
      link: "https://fuhped.vercel.app/",
      logo: "/projects/fuhped_logo1.png",
      background: "linear-gradient(45deg, #8C0303, #F8F8FF)",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initAnimation();
  }, []);

  const initAnimation = () => {
    const cards = gsap.utils.toArray(".cardProjects");

    cards.forEach((card, index) => {
      gsap.set(".cardProjects", {
        scale: 0.5,
      });

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: () => "top center",
          end: () => `+=${window.innerHeight}`,
          toggleActions: "play reverse play reverse",
        },
      });

      cardTl.to(".cardProjects", {
        scale: 1,
        ease: "linear",
        stagger: 0.25,
      });
    });
  };

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title}>
        <h1>My recent work</h1>
      </div>
      <div className={styles.container}>
        {projects.map((item, key) => {
          return (
            <div className={"cardProjects"} key={key}>
              <CardProject className={styles.cardProjects} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
