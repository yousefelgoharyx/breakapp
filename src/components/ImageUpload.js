import React, {useState} from "react";
import {Alert, Image, Pressable, StyleSheet, View} from "react-native";
import colors from "../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import {launchImageLibrary} from "react-native-image-picker";

const SIZE = 150;

const ImageUpload = ({onImageChange}) => {
  const [image, setImage] = useState(null);
  const handleImageUpload = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: "photo",
      });
      if (result?.didCancel) return;
      setImage(result.assets);
      onImageChange(result.assets);
    } catch (e) {
      Alert.alert("Can't open image library", [
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ]);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={handleImageUpload}>
        {image ? (
          <Image source={{uri: image[0].uri}} style={styles.image} />
        ) : (
          <View style={styles.box}>
            <Icon name="camera-alt" size={32} style={styles.icon} />
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: SIZE + SIZE / 4,
  },
  box: {
    backgroundColor: colors.lightPrimary,
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: SIZE / 6,
    transform: [{rotate: "45deg"}],
  },
  icon: {transform: [{rotate: "-45deg"}]},
  image: {
    width: SIZE,
    height: SIZE,
    borderColor: colors.darkPrimary,
    borderWidth: 1,
    borderRadius: SIZE / 2,
  },
});

export default ImageUpload;
