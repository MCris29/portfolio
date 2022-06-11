import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Contacts } from "@/lib/contact";
import gsap from "gsap";
import { getStoredTheme } from "@/utils/theme";
import ContactAnimation from "@/components/ContactAnimation";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your name")
    .max(100, "Your name must have a maximum of 100 characters.")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      "The name must only contain letters"
    ),
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Enter a email.")
    .max(100, "The email must have a maximum of 100 character."),
  message: yup
    .string()
    .required("Enter a message.")
    .max(255, "The message must have a maximum of 255 characters."),
});

const AnimateButton = () => {
  document.querySelectorAll("#contact_button").forEach((button) => {
    let getVar = (variable: any) =>
      getComputedStyle(button).getPropertyValue(variable);

    gsap.to(button, {
      keyframes: [
        {
          "--left-wing-first-x": 50,
          "--left-wing-first-y": 100,
          "--right-wing-second-x": 50,
          "--right-wing-second-y": 100,
          duration: 0.2,
          onComplete() {
            gsap.set(button, {
              "--left-wing-first-y": 0,
              "--left-wing-second-x": 40,
              "--left-wing-second-y": 100,
              "--left-wing-third-x": 0,
              "--left-wing-third-y": 100,
              "--left-body-third-x": 40,
              "--right-wing-first-x": 50,
              "--right-wing-first-y": 0,
              "--right-wing-second-x": 60,
              "--right-wing-second-y": 100,
              "--right-wing-third-x": 100,
              "--right-wing-third-y": 100,
              "--right-body-third-x": 60,
            });
          },
        },
        {
          "--left-wing-third-x": 20,
          "--left-wing-third-y": 90,
          "--left-wing-second-y": 90,
          "--left-body-third-y": 90,
          "--right-wing-third-x": 80,
          "--right-wing-third-y": 90,
          "--right-body-third-y": 90,
          "--right-wing-second-y": 90,
          duration: 0.2,
        },
        {
          "--rotate": 50,
          "--left-wing-third-y": 95,
          "--left-wing-third-x": 27,
          "--right-body-third-x": 45,
          "--right-wing-second-x": 45,
          "--right-wing-third-x": 60,
          "--right-wing-third-y": 83,
          duration: 0.25,
        },
        {
          "--rotate": 60,
          "--plane-x": -8,
          "--plane-y": 40,
          duration: 0.2,
        },
        {
          "--rotate": 40,
          "--plane-x": 45,
          "--plane-y": -300,
          "--plane-opacity": 0,
          duration: 0.375,
          onComplete() {
            setTimeout(() => {
              button.removeAttribute("style");
              gsap.fromTo(
                button,
                {
                  opacity: 0,
                  y: -8,
                },
                {
                  opacity: 1,
                  y: 0,
                  clearProps: true,
                  duration: 0.3,
                  onComplete() {
                    button.classList.remove("active");
                  },
                }
              );
            }, 1800);
          },
        },
      ],
    });

    gsap.to(button, {
      keyframes: [
        {
          "--text-opacity": 0,
          "--border-radius": 0,
          "--left-wing-background": getVar("--primary-dark"),
          "--right-wing-background": getVar("--primary-dark"),
          duration: 0.11,
        },
        {
          "--left-wing-background": getVar("--primary"),
          "--right-wing-background": getVar("--primary"),
          duration: 0.14,
        },
        {
          "--left-body-background": getVar("--primary-dark"),
          "--right-body-background": getVar("--primary-darkest"),
          duration: 0.25,
          delay: 0.1,
        },
        {
          "--trails-stroke": 171,
          duration: 0.22,
          delay: 0.22,
        },
        {
          "--success-opacity": 1,
          "--success-x": 0,
          duration: 0.2,
          delay: 0.15,
        },
        {
          "--success-stroke": 0,
          duration: 0.15,
        },
      ],
    });
  });
};

const Contact = () => {
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setMode("" + storedTheme);
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (dataContact: any = {}) => {
    setLoading(true);

    const contactData = {
      name: dataContact.name,
      email: dataContact.email,
      message: dataContact.message,
    };

    const formData = new FormData();
    formData.append("name", contactData.name);
    formData.append("email", contactData.email);
    formData.append("comment", contactData.message);

    try {
      const contactData = await Contacts.send(formData);
      AnimateButton();

      reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      console.log("error", e);
    }

    setLoading(false);
  };

  return (
    <div id="contact-me" className={styles.contact}>
      <div className={styles.contact_form}>
        <div className={styles.title} id="title_contact">
          <h1>Contact</h1>
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                label="Name"
                className={styles.item}
                style={{
                  backgroundColor: mode == "dark" ? "#353535" : "#F8F8F8",
                }}
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
              <TextField
                {...field}
                id="email"
                label="Email"
                className={styles.item}
                style={{
                  backgroundColor: mode == "dark" ? "#353535" : "#F8F8F8",
                }}
                error={Boolean(errors.email)}
              />
            )}
          />
          <span className={styles.error}>{errors.email?.message}</span>

          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="message"
                label="Message"
                multiline
                rows={4}
                className={styles.item}
                style={{
                  backgroundColor: mode == "dark" ? "#353535" : "#F8F8F8",
                }}
                error={Boolean(errors.message)}
              />
            )}
          />
          <span className={styles.error}>{errors.message?.message}</span>

          <div className={styles.button_container}>
            <button
              id="contact_button"
              className={styles.button_contact}
              disabled={loading}
            >
              <span className={styles.default}>Send</span>
              <span className={styles.success}>
                <svg viewBox="0 0 16 16">
                  <polyline points="3.75 9 7 12 13 5"></polyline>
                </svg>
                Sent
              </span>
              <svg className={styles.trails} viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
              </svg>
              <div className={styles.plane}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
            </button>
          </div>
        </form>
      </div>
      <ContactAnimation />
    </div>
  );
};

export default Contact;
