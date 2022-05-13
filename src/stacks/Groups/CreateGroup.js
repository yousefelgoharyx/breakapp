import React from "react";
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

const CreateGroup = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const groups = useCreateGroup();

  const onSubmit = async data => {
    try {
      await groups.mutateAsync({
        name: data.name,
        description: data.about,
        avatar: "avatar",
      });
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
          <ImageUpload onImageChange={images => console.log(images[0].uri)} />
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
            loading={groups.isLoading}
            onPress={handleSubmit(onSubmit)}
            title="انشاء"
          />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

export default CreateGroup;
