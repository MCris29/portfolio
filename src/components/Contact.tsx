import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { getStoredTheme } from "@/utils/theme";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Ingrese su nombre")
    .max(100, "Su nombre debe tener maximo 100 caracteres.")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      "El nombre solo debe contener letras"
    ),
  email: yup
    .string()
    .email("Ingrese un email válido.")
    .required("Ingrese su email")
    .max(100, "El email debe tener maximo 100 caracteres."),
  subject: yup
    .string()
    .required("Ingrese el asunto")
    .max(100, "El asunto debe tener maximo 100 caracteres."),
  message: yup
    .string()
    .required("Ingrese su mensaje")
    .max(255, "El mensaje debe tener maximo 255 caracteres."),
});

const Contact = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setMode("" + storedTheme);
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (dataContact: any = {}) => {
    var body =
      "Nombre: " +
      dataContact.name +
      "%0A" +
      "email: " +
      dataContact.email +
      "%0A" +
      "Mensaje: " +
      dataContact.message +
      "%0A" +
      " ";

    window.open(
      "mailto:crismax0629@gmail.com?subject=" +
        dataContact.subject +
        "&body=" +
        body
    );

    reset({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: mode == "dark" ? "#448AA6" : "#024059",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: mode == "dark" ? "#448AA6" : "#024059",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode == "dark" ? "#353535" : "#F8F8F8",
        backgroundColor: mode == "dark" ? "#353535" : "#F8F8F8",
        borderRadius: "20px",
        boxShadow: "8px 8px 24px rgba(0, 0, 0, 0.1);",
      },
      "&:hover fieldset": {
        borderColor: mode == "dark" ? "#448AA6" : "#024059",
      },
      "&.Mui-focused fieldset": {
        borderColor: mode == "dark" ? "#448AA6" : "#024059",
      },
    },
  });

  return (
    <div id="contact-me" className={styles.contact}>
      <div className={styles.form}>
        <h1>Contact</h1>
        <form id="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Name"
                id="name"
                className={styles.item}
                error={Boolean(errors.name)}
              />
            )}
          />
          <span className={styles.error}>{errors.name?.message}</span>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Email"
                id="email"
                className={styles.item}
                error={Boolean(errors.email)}
              />
            )}
          />
          <span className={styles.error}>{errors.email?.message}</span>

          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Subject"
                id="subject"
                className={styles.item}
                error={Boolean(errors.subject)}
              />
            )}
          />
          <span className={styles.error}>{errors.subject?.message}</span>

          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Message"
                id="message"
                multiline
                rows={4}
                className={styles.item}
                error={Boolean(errors.message)}
              />
            )}
          />
          <span className={styles.error}>{errors.message?.message}</span>

          <div className={styles.button_container}>
            <Button type="submit" value="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
