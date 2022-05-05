import React from "react";
import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <h1>Contact</h1>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <TextField label="Name" id="name" />
          <TextField label="Email" id="email" />
          <TextField label="Subject" id="subject" />
          <TextField label="Message" id="message" multiline rows={4} />
          <Button>Send</Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
