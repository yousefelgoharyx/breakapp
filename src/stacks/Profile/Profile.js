import React from "react";
import {ScrollView, TouchableOpacity} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import ProfileHeader from "./ProfileHeader";
import Divider from "../../components/Divider";
import {useAuth} from "../../context/auth";
import Tabs from "./Tabs";
import Stats from "./Stats";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader";
import useProfile from "./api/useProfile";
import StyledText from "../../components/StyledText";

const ProfileError = ({logout}) => (
  <>
    <StyledText>Something went wrong</StyledText>
    <TouchableOpacity onPress={logout}>
      <StyledText>Logout</StyledText>
    </TouchableOpacity>
  </>
);
const Profile = () => {
  const {user, logout} = useAuth();
  const query = useProfile();
  if (query.isLoading) return <Loader />;
  if (query.isError) return <ProfileError logout={logout} />;

  return (
    <Screen bg="#262626" statusBarBg="#262626">
      <AppBar title="الملف الشخصي" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader
          name={user?.name}
          id="125545"
          profileImage={require("../../assets/avatar.jpg")}
        />
        <Stats user={query.data[0]} />
        <Divider marginV={32} />
        <Tabs user={query.data[0]} />
      </ScrollView>
    </Screen>
  );
};

export default Profile;
