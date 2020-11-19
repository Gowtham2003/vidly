import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Like = ({ isLiked, onClick }) => {
  let attr = ["far", "heart"];
  if (isLiked) attr = "heart";

  return (
    <FontAwesomeIcon
      icon={attr}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
