import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";

const Projects = () => {
  const customTheme = useTheme();
  const projects = [
    { title: "Proyecto 1", link: "123" },
    { title: "Proyecto 2", link: "123" },
    { title: "Proyecto 3", link: "123" },
    { title: "Proyecto 1", link: "123" },
    { title: "Proyecto 2", link: "123" },
    { title: "Proyecto 3", link: "123" },
    { title: "Proyecto 1", link: "123" },
    { title: "Proyecto 1", link: "123" },
    { title: "Proyecto 2", link: "123" },
    { title: "Proyecto 2", link: "123" },
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
            <div key={key} className={styles.card}>
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
