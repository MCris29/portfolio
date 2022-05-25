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
          I am a Junior Software developer graduated from the Escuela
          Politécnica Nacional, I have a taste for programming and new
          technologies. I have experience developing web applications in Laravel
          and React.JS using the SCRUM methodology.
        </p>
        <Button color="secondary">
          <a
            href={"/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download="cv_Cristian_Mañay.pdf"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;
