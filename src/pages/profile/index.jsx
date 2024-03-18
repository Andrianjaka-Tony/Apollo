import React from "react";
import styles from "./style.module.scss";
import UserProfile from "../../components/userProfile";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <motion.div
        className={styles.container_profile}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <UserProfile />
      </motion.div>
    </>
  );
};

export default Profile;
