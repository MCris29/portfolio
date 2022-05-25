import react, { FC, useState } from "react";
import Link from "next/link";

import { Divider, PaletteMode, useTheme } from "@mui/material";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SwitchMode from "@/components/switchMode";
import AdbIcon from "@mui/icons-material/Adb";

import styles from "@/styles/Navigation.module.scss";
import Cover from "@/components/Cover";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

interface Props {
  mode?: PaletteMode;
  onChange?: () => void;
}

type Anchor = "top" | "left" | "bottom" | "right";

const pages = [
  { text: "About", icon: <InfoOutlinedIcon />, link: "/#about-me" },
  { text: "Skills", icon: <BuildOutlinedIcon />, link: "/#skills" },
  { text: "Work", icon: <WorkOutlinedIcon />, link: "/#projects" },
  { text: "Contact", icon: <ContactPageOutlinedIcon />, link: "/#contact-me" },
];

const Navigation: FC<Props> = ({ mode, onChange }) => {
  const customTheme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((item, key) => (
          <ListItem key={key} disablePadding>
            <Link href={item.link}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}

        <Divider sx={{ mr: 2, ml: 2 }} />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DownloadForOfflineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <a
                  href={"/cv.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="cv_Cristian_Mañay.pdf"
                >
                  Download CV
                </a>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
        color="transparent"
      >
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className={styles.logo}>Cristian</div>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className={styles.logo}>Cristian</div>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <SwitchMode mode={mode} onChange={onChange} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, key) => (
              <Link key={key} href={page.link}>
                <Button
                  className={styles.button_section}
                  onClick={toggleDrawer("bottom", false)}
                  sx={{
                    color: mode == "dark" ? "#F8F8FF" : "#2A2A2A",
                  }}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("bottom", true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor={"bottom"}
              open={state["bottom"]}
              onClose={toggleDrawer("bottom", false)}
            >
              {list("bottom")}
            </Drawer>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <SwitchMode mode={mode} onChange={onChange} />
            <Button
              className={styles.button_1}
              style={{ color: mode == "dark" ? "#F8F8FF" : "#2A2A2A" }}
            >
              <a
                href={"/cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download="cv_Cristian_Mañay.pdf"
              >
                Download CV
              </a>
            </Button>
            <Link href={"mailto:crismax0629@gmail.com"}>
              <Button className={styles.button_2}>Contact me!</Button>
              {/* <Button className={glitch_style.glitch_effect}>
                Contact me!
              </Button> */}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Cover />
    </div>
  );
};

export default Navigation;
