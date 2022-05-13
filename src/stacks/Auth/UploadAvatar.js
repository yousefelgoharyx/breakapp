import axios from "axios";
import React, {useState} from "react";
import {View} from "react-native";
import Snackbar from "react-native-snackbar";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import Screen from "../../components/Screen";
import useMethod from "../../hooks/useMethod";

const options = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const UploadAvatar = ({navigation}) => {
  const [image, setImage] = useState(null);
  const PostOwner = useMethod("post", options);
  const handleImageUpload = async () => {
    if (!image) {
      return Snackbar.show({
        text: "برجاء اختيار صورة",
        rtl: true,
        fontFamily: "Cairo",
      });
    }

    try {
      const avatarData = new FormData();
      const imageObject = {
        uri: image[0].uri,
        name: image[0].fileName,
        type: image[0].type,
      };
      try {
        avatarData.append("avatar", imageObject);
      } catch (error) {
        console.log(error);
      }

      const response = await axios.post(
        "https://break-app-123.herokuapp.com/api/v1/users/uploadAvatar",
        avatarData,
        {headers: {"Content-Type": "miltipart/form-data"}},
      );
      console.log(response);
    } catch (error) {
      console.log("err", error.response.data);
      Snackbar.show({
        text: "حدث خطا ما",
        rtl: true,
        fontFamily: "Cairo",
      });
    }
  };
  return (
    <Screen statusBarBg="#000" bg="#000">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 32,
        }}>
        <ImageUpload onImageChange={image => setImage(image)} />
        <Button
          onPress={handleImageUpload}
          loading={PostOwner.loading}
          title="تم"
          style={{marginTop: 24, alignSelf: "stretch"}}
        />
        <Button
          onPress={() => navigation.navigate("MainTabs")}
          loading={PostOwner.loading}
          title="تخطي"
          style={{marginTop: 8, alignSelf: "stretch"}}
        />
      </View>
    </Screen>
  );
};

export default UploadAvatar;
