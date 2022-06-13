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
          I am a Junior Software developer graduated from the Escuela
          Politécnica Nacional, I have a taste for programming and new
          technologies. I have experience developing web applications using the SCRUM methodology.
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
