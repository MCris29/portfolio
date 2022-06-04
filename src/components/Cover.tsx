import React, { useState, useEffect } from "react";
import styles from "@/styles/Navigation.module.scss";
import { getStoredTheme } from "@/utils/theme";

const Cover = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setMode("" + storedTheme);
  });

  return (
    <div className={styles.cover}>
      <video autoPlay muted loop>
        <source src="/cover.mp4" type="video/mp4" />
      </video>
      <div style={{ color: mode == "dark" ? "#F8F8FF" : "#2A2A2A" }}>
        <p className={styles.p_1}>Hi,</p>
        <p className={styles.p_2}>I am Cristian,</p>
        <p className={styles.p_3}>Software Developer</p>
      </div>
    </div>
  );
};

export default Cover;
