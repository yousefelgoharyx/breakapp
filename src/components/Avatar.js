import React from "react";
import {Image} from "react-native";
const Avatar = ({source, size = 32}) => {
  return (
    <Image
      source={source}
      style={{width: size, height: size, borderRadius: size / 2}}
    />
  );
};

export default Avatar;
