import RtmClient, {RtmMessage} from 'agora-react-native-rtm';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import ChatBar from '../../components/ChatBar';
import ChatMessage from '../../components/ChatMessage';
import Spacer from '../../components/Spacer';
import {useAuth} from '../../context/auth';
const APP_ID = '91cdafd02894415bb0021324b3e8c92b';
const Chat = ({onMicPress, micStatus, channelName, channelId}) => {
  const [messages, setMessages] = useState([]);
  const [val, setVal] = useState('');
  const {user} = useAuth();
  const rtmClient = useRef(null);
  useEffect(() => {
    console.log(user);
    const rtm = new RtmClient();
    rtmClient.current = rtm;
    async function connect() {
      try {
        await rtm.createInstance(APP_ID);
        await rtm.loginV2(user.name);
        await rtm.joinChannel(channelId);

        rtm.addListener('MessageReceived', message => {
          console.log(message);
        });

        rtm.addListener('ChannelMemberJoined', m => {
          console.log(m);
        });
      } catch (e) {
        console.log(e.toString());
      }
    }

    async function disconnect() {
      try {
        await rtm.leaveChannel(channelId);
        console.log('Left channel');
        await rtm.logout();
        await rtm.removeAllListeners();
      } catch (e) {
        console.log(e.toString());
      }
    }
    connect();

    return () => {
      disconnect();
    };
  }, []);
  const handleSendMessage = async () => {
    await rtmClient.current.sendMessage(channelId, new RtmMessage(val));
    console.log('Message sent');
    setVal('');
    const newMessages = [...messages];
    newMessages.push({
      text: val,
      user: {
        id: user._id,
        name: user.name,
        image: require('../../assets/person.png'),
      },
    });
    setMessages(newMessages);
  };
  return (
    <>
      <ScrollView
        style={{}}
        contentContainerStyle={{marginTop: 24, paddingBottom: 24}}
        showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <>
            <ChatMessage
              key={index}
              message={message.text}
              user={message.user}
            />
            <Spacer />
          </>
        ))}
      </ScrollView>
      <ChatBar
        onShowMenu={handleSendMessage}
        onMicPress={onMicPress}
        micStatus={micStatus}
        value={val}
        onChangeText={text => {
          setVal(text);
        }}
      />
    </>
  );
};

export default Chat;
