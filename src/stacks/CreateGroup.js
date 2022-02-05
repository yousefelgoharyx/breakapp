import React from "react";
import AuthFlowView from "../components/AuthFlowView";
import Button from "../components/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import Page from "../components/Page";
import Spacer from "../components/Spacer";

const CreateGroup = ({navigation}) => {
  return (
    <Page effect onBack={navigation.goBack} title="انشاء قبيلة">
      <AuthFlowView>
        <ImageUpload />
        <Spacer space={32} />
        <Input placeholder="اسم المستخدم" maxChars={11} showMaxCharsIndicator />
        <Spacer space={32} />
        <Input placeholder="رقم الهاتف" keyboardType="phone-pad" />
        <Spacer space={32} />
        <Input placeholder="البلد" />
        <Spacer space={32} />
        <Input placeholder="الجنس" />
        <Spacer space={32} />
        <Input placeholder="كلمة المرور" isSecure />
        <Spacer space={32} />
        <Input placeholder="اكتب عنك" isSecure />
        <Spacer space={32} />
        <Button title="نسيت كلمة" />
      </AuthFlowView>
    </Page>
  );
};

export default CreateGroup;
