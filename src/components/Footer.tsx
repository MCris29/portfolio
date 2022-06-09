import React from "react";
import styles from "@/styles/Home.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "@mui/material";

const Footer = () => {
  const socialNetworks = [
    {
      icon: <GitHubIcon />,
      text: "GitHub",
      link: "https://github.com/MCris29",
    },
    {
      icon: <LinkedInIcon />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/cristian-manay",
    },
    {
      icon: <EmailIcon />,
      text: "Gmail",
      link: "mailto:crismax0629@gmail.com",
    },
  ];

  return (
    <>
      <div className={styles.footer}>
        {socialNetworks.map((item, key) => {
          return (
            <Link
              key={key}
              href={item.link}
              target="_blank"
              className={styles.icon}
              color="inherit"
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
