import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";

const Projects = () => {
  const customTheme = useTheme();
  const projects = [
    { title: "Proyecto 1", link: "123", background: "#000" },
    { title: "Proyecto 2", link: "123", background: "#789456" },
    { title: "Proyecto 3", link: "123", background: "#000231" },
    { title: "Proyecto 1", link: "123", background: "#000258" },
    { title: "Proyecto 2", link: "123", background: "#666987" },
    { title: "Proyecto 3", link: "123", background: "#444246" },
    { title: "Proyecto 1", link: "123", background: "#458111" },
    { title: "Proyecto 2", link: "123", background: "#222999" },
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
          return (
            <div
              key={key}
              className={styles.card}
              style={{ backgroundColor: item.background }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
