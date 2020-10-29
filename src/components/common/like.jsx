import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Like = ({ isLiked, onLike }) => {
  let attr = ["far", "heart"];
  if (isLiked) attr = "heart";

  return (
    <FontAwesomeIcon
      icon={attr}
      onClick={onLike}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
