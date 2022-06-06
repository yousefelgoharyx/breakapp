import React from 'react';
import {ScrollView} from 'react-native';
import ChatBar from '../../components/ChatBar';
import ChatMessage from '../../components/ChatMessage';
import Spacer from '../../components/Spacer';

const Chat = ({onMicPress, micStatus}) => {
  return (
    <>
      <ScrollView
        style={{}}
        contentContainerStyle={{marginTop: 24, paddingBottom: 24}}
        showsVerticalScrollIndicator={false}>
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
        <ChatMessage source={require('../../assets/person.png')} />
        <Spacer />
      </ScrollView>
      <ChatBar onMicPress={onMicPress} micStatus={micStatus} />
    </>
  );
};

export default Chat;
