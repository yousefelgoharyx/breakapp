import React, {useState} from "react";
import {View} from "react-native";
import Snackbar from "react-native-snackbar";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import Screen from "../../components/Screen";
import instance from "../../utils/axios";
const UploadAvatar = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageUpload = () => {
    if (image) {
      setLoading(true);
      const avatarData = new FormData();

      avatarData.append("avatar", {
        name: image[0].fileName,
        type: image[0].type,
        uri: image[0].uri,
        size: image[0].fileSize,
      });
      instance
        .post("/users/uploadAvatar", avatarData, {
          headers: {"Content-Type": "multipart/form-data"},
        })
        .then(res => {
          console.log(res.data);
          setLoading(false);
        })
        .catch(e => {
          console.log("Error");
          console.log(e.response.data);
          setLoading(false);
        });
    } else {
      Snackbar.show({
        text: "برجاء اختيار صورة",
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
        <ImageUpload
          onImageChange={image => {
            setImage(image);
          }}
        />
        <Button
          onPress={handleImageUpload}
          loading={loading}
          title="تم"
          style={{marginTop: 24, alignSelf: "stretch"}}
        />
      </View>
    </Screen>
  );
};

export default UploadAvatar;
