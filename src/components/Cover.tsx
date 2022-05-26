import { FC } from "react";
import styles from "@/styles/Navigation.module.scss";
import { useTheme, PaletteMode } from "@mui/material";

interface Props {
  mode?: PaletteMode;
  onChange?: () => void;
}

const Cover: FC<Props> = ({ mode }) => {
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
