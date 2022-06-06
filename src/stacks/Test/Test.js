import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import ChatBar from '../../components/ChatBar';
import ChatMessage from '../../components/ChatMessage';
import Screen from '../../components/Screen';
import Spacer from '../../components/Spacer';
import {useAuth} from '../../context/auth';
import RTMClient from '../../utils/rtm_client';

const APP_ID = '14cc34ef77774273aaaba21749ac950c';
const Test = () => {
  const [messages, setMessages] = useState([]);
  const {user} = useAuth();
  useEffect(() => {
    const rtm = new RTMClient();
    rtm.init(APP_ID);
    rtm.login(user.name);
  }, []);
  return (
    <Screen>
      <View style={{flex: 1}}>
        <ScrollView
          style={{}}
          contentContainerStyle={{marginTop: 24, paddingBottom: 24}}
          showsVerticalScrollIndicator={false}>
          {messages.map(({message, memberId}) => (
            <>
              <ChatMessage
                key={message}
                source={require('../../assets/person.png')}
                message={message}
                memberId={memberId}
              />
              <Spacer />
            </>
          ))}
        </ScrollView>
        <ChatBar />
      </View>
    </Screen>
  );
};

export default Test;
