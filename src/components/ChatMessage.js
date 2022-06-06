import React from 'react';
import {StyleSheet, View} from 'react-native';
import Avatar from './Avatar';
import StyledText from './StyledText';
import Check from '../icons/Check';
import Mic from '../icons/Mic';
import Clown from '../icons/Clown';

const ChatMessage = ({message, user}) => {
  return (
    <View style={styles.container}>
      <Avatar source={user.image} size={48} style={styles.avatar} />
      <View style={styles.messageContainer}>
        <StyledText style={{textAlign: 'left'}} bold>
          {user.name}
        </StyledText>
        <StyledText>{message}</StyledText>
        <View style={styles.iconsContainer}>
          <Check size={18} style={styles.icon} />
          <Clown size={18} style={styles.icon} />
          <Mic size={18} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    left: 24,
    zIndex: 2,
  },
  messageContainer: {
    backgroundColor: '#575757',
    paddingVertical: 12,
    paddingStart: 24 + 16,
    paddingEnd: 12,
    borderRadius: 8,
    flex: 0.7,
    textAlign: 'right',
  },
  iconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 12,
    right: 4,
    alignItems: 'center',
  },
  icon: {
    marginEnd: 8,
  },
});

export default ChatMessage;
