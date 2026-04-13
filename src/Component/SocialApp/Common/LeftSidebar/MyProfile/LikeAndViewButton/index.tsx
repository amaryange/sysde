import { Likes, View } from "@/Constant";
import React from "react";
import { Button } from "reactstrap";

const LikeAndViewButton = () => {
  return (
    <>
      <div className="social-btngroup d-flex">
        <Button color="primary" className="text-center me-2">
          {Likes}
        </Button>
        <Button color="primary-light " className="text-center">
          {View}
        </Button>
      </div>
      <div className="likes-profile text-center">
        <h4>
          <i className="fa fa-heart font-danger"></i> {"884"}
        </h4>
      </div>
      <h6 className="text-center">{"35 New Likes This Week"}</h6>
    </>
  );
};

export default LikeAndViewButton;
