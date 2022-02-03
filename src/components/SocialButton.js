import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../utils/colors';
import StyledText from './StyledText';

const SocialButton = ({icon, text, color = '#05f', onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon size={24} name={icon} color={color} style={styles.icon} />
      <StyledText style={styles.text}>{text}</StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
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
    fontWeight: 'bold',
  },
  icon: {
    marginStart: 16,
  },
});

export default SocialButton;
