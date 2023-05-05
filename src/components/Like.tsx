import React, { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(true);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  if (isLiked) {
    return (
      <BsFillHeartFill
        size="20px"
        color="#ff6b81"
        onClick={toggle}
      ></BsFillHeartFill>
    );
  } else {
    return <BsHeart size="20px" onClick={toggle} />;
  }
};

export default Like;
