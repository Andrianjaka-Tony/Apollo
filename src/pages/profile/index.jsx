import React from "react";
import styles from "./style.module.scss";
import UserProfile from "../../components/userProfile";

const Profile = () => {
  return (
    <>
      <div className={styles.container_profile}>
        <UserProfile />
      </div>
    </>
  );
};

export default Profile;
