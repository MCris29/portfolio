import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import { Link } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Button, { ButtonProps } from "@mui/material/Button";

const CardProject = ({ item }: any) => {
  const customTheme = useTheme();

  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(customTheme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ProjectButton = styled(Button)<ButtonProps>(({ theme }) => ({
    background: item.background,
    "&:hover": {
      background: "linear-gradient(225deg, #448AA6, #024059)",

      img: {
        transform: "scale(1.1)",
        transition: "0.3s",
        zIndex: "1000",
      },
    },
  }));

  return (
    <>
      <ProjectButton className={styles.card} onClick={handleClickOpen}>
        <Image src={item.logo} width={200} height={180} alt="M. Cristian" />
      </ProjectButton>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{item.title}</DialogTitle>
        <DialogContent>
          <Image src={item.image} alt="/loading.gif" width={600} height={500} />
          <DialogContentText>
            {item.description}
            <br />
            <strong>Used tools:</strong> {item.tools}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            <Tooltip title="Close" placement="top">
              <CloseIcon />
            </Tooltip>
          </Button>
          <Link href={item.link} target="_blank">
            <Button onClick={handleClose} autoFocus>
              <Tooltip title="Visit App" placement="top">
                <LinkIcon />
              </Tooltip>
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardProject;
