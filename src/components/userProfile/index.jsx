import React from "react";
import HeadProfile from "./headProfile";
import AboutProfile from "./aboutProfile";
import Footer from "../footer";
import ArtworkAdd from "../artworkAdd";
import ChatBox from "../ChatBox";

const UserProfile = () => {
  return (
    <>
      <HeadProfile />
      <AboutProfile />
      <ArtworkAdd />
      <ChatBox />
      <Footer />
    </>
  );
};

export default UserProfile;
