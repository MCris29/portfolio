import React, { useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import CardProject from "./CardProject";
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
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initAnimation();
  }, []);

  const initAnimation = () => {
    gsap.set("#title_projects", {
      opacity: 0,
      y: 50,
    });

    gsap.set(".cardProjects", {
      scale: 0,
    });

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: () => "top center",
        end: () => `+=${window.innerHeight}`,
      },
    });

    cardTl.to("#title_projects", {
      opacity: 1,
      y: 0,
    });

    cardTl.to(".cardProjects", {
      scale: 1,
      ease: "bounce",
      duration: 1,
      stagger: 0.25,
    });
  };

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title} id="title_projects">
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
