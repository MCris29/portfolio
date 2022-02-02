import { FC } from "react";

import { PaletteMode, useTheme } from "@mui/material";
import { AppBar, Box, Toolbar, Typography, Switch } from "@mui/material";
import SwitchMode from "@/components/switchMode";

interface Props {
  mode: PaletteMode;
  onChange?: () => void;
}

const Navigation: FC<Props> = ({ mode, onChange }) => {
  const customTheme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
        }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MCris
          </Typography>
          <SwitchMode onChange={onChange} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
