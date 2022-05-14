import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Snackbar from "react-native-snackbar";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import useCreateGroup from "./api/useCreateGroup";
import upload_image from "../../utils/upload_image";
const CreateGroup = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const groups = useCreateGroup();

  const onSubmit = async data => {
    if (!image) return Snackbar.show({text: err.msg, fontFamily: "Cairo"});
    try {
      setLoading(true);
      const imageResponse = await upload_image(image);
      await groups.mutateAsync({
        name: data.name,
        description: data.about,
        avatar: imageResponse.avatarUrl,
      });
      setLoading(false);
      Snackbar.show({text: "تم انشاء المجموعة بنجاح", fontFamily: "Cairo"});
      navigation.navigate("Groups");
    } catch (e) {
      e.response.data.errors.forEach(err => {
        Snackbar.show({text: err.msg, fontFamily: "Cairo"});
      });
    }
  };
  console.log(errors);
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="انشاء قبيلة">
        <AuthFlowView>
          <ImageUpload onImageChange={images => setImage(images[0])} />
          <Spacer space={32} />
          <Input
            rules={{required: true}}
            control={control}
            placeholder="اسم القبيلة"
            name="name"
            message="هذا الحقل مطلوب"
            invalid={errors.name}
          />
          <Input
            rules={{required: true, minLength: 20}}
            control={control}
            placeholder="اكتب عن القبيلة"
            name="about"
            message={
              errors?.about?.type === "required"
                ? "هذا الحقل مطلوب"
                : "يجب ان يكون اكثر من 20 حروف"
            }
            invalid={errors.about}
          />
          <Button
            loading={loading}
            onPress={handleSubmit(onSubmit)}
            title="انشاء"
          />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

export default CreateGroup;
