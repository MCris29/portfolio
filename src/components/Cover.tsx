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
      <div style={{ color: mode == "dark" ? "#F8F8FF" : "#2A2A2A" }}>
        <p>Hi,</p>
        <p>I am Cristian,</p>
        <p>Software Developer</p>
      </div>
    </div>
  );
};

export default Cover;
