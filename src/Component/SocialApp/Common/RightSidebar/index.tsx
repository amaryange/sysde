import React from "react";

import ProfileIntroduction from "./ProfileIntro";
import Follower from "./Followers";
import Followings from "./Following";
import LatestPhotos from "./LatestPhotos";
import Friends from "./Friends";

const RightSideBar = () => {
  return (
    <>
      <ProfileIntroduction />
      <Follower />
      <Followings />
      <LatestPhotos />
      <Friends />
    </>
  );
};

export default RightSideBar;
