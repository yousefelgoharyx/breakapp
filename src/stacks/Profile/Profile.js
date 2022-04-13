import React from "react";
import {ScrollView} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import ProfileHeader from "./ProfileHeader";
import Divider from "../../components/Divider";
import {useAuth} from "../../context/auth";
import Tabs from "./Tabs";
import Stats from "./Stats";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader";

const Profile = () => {
  const {user} = useAuth();
  const GetOwner = useGet("/users/getMyProfile");
  let content = <Loader />;
  if (GetOwner.isReady) {
    content = (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader
          name={user?.name}
          id="125545"
          profileImage={require("../../assets/avatar.jpg")}
        />
        <Stats user={GetOwner.data[0]} />
        <Divider marginV={32} />
        <Tabs user={GetOwner.data[0]} />
      </ScrollView>
    );
  }
  return (
    <Screen bg="#262626" statusBarBg="#262626">
      <AppBar title="الملف الشخصي" />
      {content}
    </Screen>
  );
};

export default Profile;
