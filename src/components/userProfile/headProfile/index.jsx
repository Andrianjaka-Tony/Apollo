import React from "react";
import styles from "./style.module.sass";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiSealCheck } from "react-icons/pi";
import { FaInstagram, FaDribbble, FaTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { BsShareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { headeProfileVariants } from "./anime";

const social = [<FaInstagram />, <FaDribbble />, <FaTwitter />];
const aboutUser = [
  {
    title: "Role",
    value: "Design",
  },
  {
    title: "Experience",
    value: "26 years",
  },
];
const HeadProfile = () => {
  return (
    <motion.div className={styles.headeContainer} variants={headeProfileVariants} initial="initial" animate="animate" exit="exit">
      <div className={styles.left}>
        <div className={styles.user_picture}>
          <img src="/images/1.jpg" alt="" />
        </div>
        <div className={styles.userLocalisation}>
          <div className={styles.icon}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.text}>Los Angeles new Avenue 09</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.username}>
          <div className={styles.textUsername}>Broklin Simmons</div>
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
          {aboutUser.map((about, index) => (
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
