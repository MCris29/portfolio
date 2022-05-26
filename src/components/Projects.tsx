import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import CardProject from "./CardProject";

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

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title}>
        <h1>My recent work</h1>
      </div>
      <div className={styles.container}>
        {projects.map((item, key) => {
          return <CardProject key={key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
