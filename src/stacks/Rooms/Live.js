import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Screen from '../../components/Screen';
import StyledText from '../../components/StyledText';
import Stars from '../../icons/Stars';
import Share from '../../icons/Share';
import Logout from '../../icons/Logout';
import Vote from '../../icons/Vote';
import Flag from 'react-native-country-flag';
import Spacer from '../../components/Spacer';
import Award from '../../icons/Award';
import colors from '../../utils/colors';
import UserCount from '../../components/UserCount';
import FramedAvatar from '../../components/FramedAvater';
import LabeledAvatar from '../../components/LabeledAvatar';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import UserModal from './UserModal';
import ActionsModal from './ActionsModal';
import UsersModal from './UsersModal';
import LuckBag from './LuckBag';
import ChatActionsModal from './ChatActionsModal';
import RtcEngine from 'react-native-agora';
import {useAuth} from '../../context/auth';
import Chat from './Chat';
const users = [
  {
    id: 1,
    image: require('../../assets/person.png'),
    label: '10K',
  },
  {
    id: 2,
    image: require('../../assets/person.png'),
    label: '10K',
  },
  {
    id: 3,
    image: require('../../assets/person.png'),
    label: '10K',
  },
  {
    id: 4,
    image: require('../../assets/person.png'),
    label: '10K',
  },
  {
    id: 5,
    image: require('../../assets/person.png'),
    label: '10K',
  },
];
const APP_ID = '1c95a789c7f04acc8c7852ef280c5336';
const Live = ({route}) => {
  // Passed data
  const voiceToken = route.params.voiceToken;
  const chatToken = route.params.voiceToken;
  const channelName = route.params.channelName;
  const channelId = route.params.channelId;

  const userModalRef = useRef(null);
  const usersModalRef = useRef(null);
  const luckBagModalRef = useRef(null);
  const actionsModalRef = useRef(null);
  const chatActionModalRef = useRef(null);

  const rtcEngine = useRef(null);

  const {user} = useAuth();
  const [callState, setCallState] = useState({
    joined: false,
  });

  const [openMicrophone, setOpenMicrophone] = useState(false);

  const openUserModal = () => userModalRef.current?.present();
  const openUsersModal = () => usersModalRef.current?.present();
  const openLuckBagModal = () => luckBagModalRef.current?.present();
  const openActionsModal = () => actionsModalRef.current?.present();
  const openChatActionModalRef = () => chatActionModalRef.current?.present();

  useEffect(() => {
    initAgora();

    return () => {
      rtcEngine.current?.leaveChannel();
    };
  }, []);

  const initAgora = useCallback(async () => {
    try {
      rtcEngine.current = await RtcEngine.create(APP_ID);
      await rtcEngine.current?.enableLocalAudio(true);
      await rtcEngine.current?.setEnableSpeakerphone(true);
      await rtcEngine.current?.joinChannel(
        voiceToken,
        channelName,
        null,
        Number(user._id),
      );
      setCallState({...callState, joined: true});
    } catch (error) {
      console.log(error);
    }

    rtcEngine.current.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
    });

    rtcEngine.current.addListener('Error', e => {
      console.log('Error', e);
    });
    rtcEngine.current.addListener(
      'JoinChannelSucess',
      (channel, uid, elapsed) => {
        console.log('JoinChannelSuccess', channel, uid, elapsed);
      },
    );
  }, []);

  const switchMicrophone = async () => {
    try {
      await rtcEngine.current?.enableLocalAudio(!openMicrophone);
      setOpenMicrophone(!openMicrophone);
    } catch {
      console.log('Error while switching mic');
    }
  };

  return (
    <BottomSheetModalProvider>
      <Screen bg="#000" statusBarBg="#000">
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Flag isoCode="EG" size={16} />
            <StyledText bold style={styles.headerText}>
              اصدقاء 24
            </StyledText>
            <Stars size={20} />
          </View>
          <View style={styles.icons}>
            <Vote size={32} />
            <Spacer />
            <TouchableOpacity activeOpacity={0.7} onPress={openActionsModal}>
              <Logout size={32} />
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity activeOpacity={0.7} onPress={openUsersModal}>
              <Share size={34} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.topUsers}>
          <View style={styles.award}>
            <Award />
            <StyledText bold style={styles.awardText}>
              30.0K
            </StyledText>
          </View>
          <View style={styles.users}>
            <UserCount count={963} />
            <Spacer />
            <FramedAvatar
              frameSource={require('../../assets/frames/idk.png')}
              imageSource={require('../../assets/person.png')}
            />
            <Spacer />
            <FramedAvatar
              frameSource={require('../../assets/frames/idk.png')}
              imageSource={require('../../assets/person.png')}
            />
          </View>
        </View>

        <View style={styles.usersRow}>
          {users.map(user => (
            <LabeledAvatar
              key={user.id}
              source={user.image}
              label={user.label}
              size={56}
              onPress={openUserModal}
            />
          ))}
        </View>

        <View style={styles.usersRow}>
          {users.map(user => (
            <LabeledAvatar
              key={user.id}
              source={user.image}
              label={user.label}
              size={56}
              onPress={openUserModal}
            />
          ))}
        </View>

        <Chat
          channelName={channelName}
          chatToken={chatToken}
          onMicPress={switchMicrophone}
          micStatus={openMicrophone}
          channelId={channelId}
        />

        <UserModal ref={userModalRef} />
        <UsersModal ref={usersModalRef} />
        <LuckBag ref={luckBagModalRef} />
        <ActionsModal ref={actionsModalRef} />
        <ChatActionsModal
          ref={chatActionModalRef}
          onShowLuckBag={openLuckBagModal}
        />
      </Screen>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#403F3E',
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  headerText: {
    marginHorizontal: 8,
  },
  icons: {
    flexDirection: 'row',
    top: 1,
  },
  topUsers: {
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  award: {
    flexDirection: 'row',
    backgroundColor: '#403F3E50',
    alignSelf: 'flex-start',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  awardText: {
    marginStart: 12,
    color: colors.primary,
  },
  users: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usersRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 8,
    flexWrap: 'wrap',
  },
});

export default Live;
