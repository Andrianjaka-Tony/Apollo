import React, { useEffect, useState } from "react";
import styles from "./style.module.sass";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiSealCheck } from "react-icons/pi";
import { FaInstagram, FaDribbble, FaTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { BsShareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { headeProfileVariants } from "./anime";
import { URL } from "../../../utils/Alaivo";
import { MdAlternateEmail } from "react-icons/md";

const social = [<FaInstagram />, <FaDribbble />, <FaTwitter />];
let aboutUser = [
  {
    title: "Role",
    value: "Design",
  },
  {
    title: "Experience",
    value: "0 years",
  },
];
const HeadProfile = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : undefined;
  const [about, setAbout] = useState(aboutUser);
  useEffect(() => {
    if (user) {
      console.log(user);
      aboutUser[0].value = user.profile.nom;
      setAbout(aboutUser);
    }
  }, []);

  return (
    <motion.div className={styles.headeContainer} variants={headeProfileVariants} initial="initial" animate="animate" exit="exit">
      <div className={styles.left}>
        <div className={styles.user_picture}>
          <img src={user ? URL + user.pdp.replace(/\\/g, "/") : "/images/1.jpg"} alt="" />
        </div>
        <div className={styles.userLocalisation}>
          <div className={styles.icon}>
            <MdAlternateEmail />
          </div>
          <div className={styles.text}>{user ? user.email : "xxxxxx.email.com"}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.username}>
          <div className={styles.textUsername}> {user ? user.nom : "[ Your name ]"}</div>
          <div className={styles.verified}>
            <PiSealCheck />
          </div>
        </div>
        <div className={styles.actionsContainer}>
          {social.map((soc, index) => (
            <ActionIcon icon={soc} key={index} />
          ))}
          <ActionButton icon={<IoMailSharp />} text={"Message"} />
          <ActionButton icon={<BsShareFill />} text={"Share"} />
        </div>
        <div className={styles.actionsContainerRoles}>
          {about.map((about, index) => (
            <AboutUser {...about} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ActionIcon = ({ icon }) => {
  return <div className={styles.iconButtonAction}>{icon}</div>;
};

const ActionButton = ({ icon, text }) => {
  return (
    <div className={styles.ButtonAction}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

const AboutUser = ({ title, value }) => {
  return (
    <div className={styles.AboutUser}>
      <div className={styles.AboutUserTitle}> {title} </div>
      <div className={styles.AboutUserValue}> {value} </div>
    </div>
  );
};

export default HeadProfile;
