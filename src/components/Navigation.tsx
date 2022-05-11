import { FC } from "react";

import { PaletteMode, useTheme } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SwitchMode from "@/components/switchMode";

import styles from "@/styles/Navigation.module.scss";
import Cover from "@/components/Cover";

interface Props {
  mode?: PaletteMode;
  onChange?: () => void;
}

const Navigation: FC<Props> = ({ mode, onChange }) => {
  const customTheme = useTheme();

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: customTheme.palette.background.paper,
        color: customTheme.palette.text.primary,
      }}
    >
      <AppBar
        className={styles.navigation}
        position="fixed"
        // color="transparent"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cris
          </Typography>
          <SwitchMode mode={mode} onChange={onChange} />
        </Toolbar>
      </AppBar>
      <Cover />
    </div>
  );
};

export default Navigation;
