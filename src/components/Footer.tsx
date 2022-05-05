import react from "react";
import styles from "@/styles/Home.module.scss";
import { useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const socialNetworks = [
    { icon: <GitHubIcon />, text: "GitHub" },
    { icon: <LinkedInIcon />, text: "LinkedIn" },
    { icon: <TwitterIcon />, text: "Twiter" },
    { icon: <EmailIcon />, text: "Gmail" },
  ];

  return (
    <>
      <div className={styles.footer}>
        {socialNetworks.map((item, key) => {
          return (
            <div key={key} className={styles.icon}>
              {item.icon}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
