import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";
import CardProject from "./CardProject";

const Projects = () => {
  const customTheme = useTheme();

  const projects = [
    {
      title: " 1",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 2",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 3",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 1",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 2",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 3",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 1",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 2",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
    {
      title: " 3",
      description: "Proyecto",
      link: "123",
      background: "#353535",
    },
  ];

  return (
    <div className={styles.projects}>
      <div
        className={styles.title}
        style={{
          backgroundColor: customTheme.palette.background.paper,
        }}
      >
        <h1>My Projects</h1>
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
