import React from "react";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";

const CreateGroup = ({navigation}) => {
  const ToMainTabs = () => navigation.navigate("MainTabs");
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="انشاء قبيلة">
        <AuthFlowView>
          <ImageUpload onImageChange={images => console.log(images[0].uri)} />
          <Spacer space={32} />
          <Input placeholder="اسم المستخدم" />
          <Input placeholder="رقم الهاتف" keyboardType="phone-pad" />
          <Input placeholder="البلد" />
          <Input placeholder="الجنس" />
          <Input placeholder="كلمة المرور" isSecure />
          <Input placeholder="اكتب عنك" isSecure />
          <Button onPress={ToMainTabs} title="انشاء" />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

export default CreateGroup;
