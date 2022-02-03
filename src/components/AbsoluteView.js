import React from 'react';
import {View} from 'react-native';
const AbsoluteView = ({children, ...props}) => {
  return <View style={{position: 'absolute', ...props}}>{children}</View>;
};

export default AbsoluteView;
