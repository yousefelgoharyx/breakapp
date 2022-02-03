import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';
import StyledText from './StyledText';

const FacebookButton = () => {
  return (
    <View style={styles.container}>
      <Icon size={24} name="facebook" color="#05f" style={styles.icon} />
      <StyledText style={styles.text}>Facebook</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    borderRadius: 20,
  },
  text: {
    color: colors.dark,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    left: -32,
    fontFamily: 'Cairo',
  },
  icon: {
    marginStart: 16,
  },
});

export default FacebookButton;
