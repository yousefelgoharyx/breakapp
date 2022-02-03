import React from 'react';
import {Text} from 'react-native';

const StyledText = ({children, size = 16, style, ...rest}) => {
  return (
    <Text
      style={{
        color: '#fff',
        fontFamily: 'Cairo',
        fontSize: size,
        ...style,
      }}
      {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
