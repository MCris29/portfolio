import React, { useState } from "react";
import { useTheme } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  return (
    <>
      <Button
        className={styles.card}
        style={{ backgroundColor: item.background }}
        onClick={handleClickOpen}
      >
        {item.title}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{item.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Visit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardProject;
