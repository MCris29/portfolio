import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";

const About = () => {
  const customTheme = useTheme();

  return (
    <div className={styles.about}>
      <div>
        <h1>About me</h1>
      </div>
      <div
        className={styles.section_2}
        style={{
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
        }}
      >
        <p>
          I am a Junior Software developer recently graduated from the EPN with
          a taste for programming and new technologies. I have experience
          developing web applications in Laravel and React.JS using the SCRUM
          methodology.
        </p>
        <Button color="secondary">More...</Button>
      </div>
    </div>
  );
};

export default About;
