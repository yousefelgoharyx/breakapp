import React from 'react';
import {View} from 'react-native';

const Spacer = ({space = 16}) => {
  return (
    <View
      style={{
        width: space,
        height: space,
        backgroundColor: 'transparent',
      }}></View>
  );
};

export default Spacer;
