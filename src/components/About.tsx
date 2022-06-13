import react, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import { getStoredTheme } from "@/utils/theme";
import AboutAnimation from "@/components/AboutAnimation";

const About = () => {
  const customTheme = useTheme();

  const [mode, setMode] = useState("");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setMode("" + storedTheme);
  });

  return (
    <div className={styles.about} id="about-me">
      <div id="title_about">
        <h1>About me</h1>
      </div>
      <div
        id="section_2"
        className={styles.section_2}
        style={{
          backgroundColor: mode == "light" ? "#448AA6" : "#024059",
          color: customTheme.palette.text.primary,
        }}
      >
        <p>
          Junior Software Developer with approximately one year of experience. I
          have experience in Front-end and Back-end development. I am interested
          in agile methodologies, object-oriented programming, functional
          programming, responsive design, UI and UX. I am a graduate of the
          Escuela Politécnica Nacional (Quito, Ecuador), I like web development
          and, above all, being constantly learning about new technologies.
        </p>
        <Button color="secondary" id="button_about">
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
      <AboutAnimation />
    </div>
  );
};

export default About;
