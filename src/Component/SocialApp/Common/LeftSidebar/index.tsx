import React from "react";
import MyProfileSection from "./MyProfile";
import MutualFriend from "./MutualFriends";
import ActivityFeedSection from "./ActivityFeed";

const LeftBar = () => {
  return (
    <>
      <MyProfileSection />
      <MutualFriend />
      <ActivityFeedSection />
    </>
  );
};

export default LeftBar;
