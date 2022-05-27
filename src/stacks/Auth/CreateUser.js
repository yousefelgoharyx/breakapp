import React, {useState} from "react";
import {useForm, useController} from "react-hook-form";
import Snackbar from "react-native-snackbar";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Spacer from "../../components/Spacer";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import instance from "../../utils/axios";
import colors from "../../utils/colors";
import CountryPicker, {DARK_THEME} from "react-native-country-picker-modal";
import {Picker} from "@react-native-picker/picker";
import {useAuth} from "../../context/auth";
import ImageUpload from "../../components/ImageUpload";
import upload_image from "../../utils/upload_image";
const CreateUser = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const {login} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const genderController = useController({
    control: control,
    name: "gender",
    defaultValue: "Male",
  });

  const countryController = useController({
    control: control,
    name: "country",
    defaultValue: "Egypt",
  });

  const regsier = async data => {
    setLoading(true);
    let avatarUrl = "";
    try {
      if (image) {
        const res = await upload_image(image);
        console.log(res);
        avatarUrl = res.avatarUrl;
      }
      const response = await instance.post("/users/register", {
        ...data,
        avatar: avatarUrl,
      });
      await login(response.data.info, response.data.auth_token);
      setLoading(false);
    } catch (e) {
      Snackbar.show({
        text: e.response.data.message || e.response.data.error,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.lightPrimary,
        rtl: true,
        fontFamily: "Cairo",
      });
      setLoading(false);
    }
  };
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="انشاء حساب">
        <AuthFlowView>
          <ImageUpload onImageChange={images => setImage(images[0])} />
          <Spacer space={32} />
          <Input
            placeholder="الاسم الاول"
            control={control}
            name="first_name"
            rules={{required: true}}
            invalid={errors.first_name}
            message="هذا الحقل مطلوب"
          />
          <Input
            placeholder="الاسم الاخير"
            control={control}
            name="last_name"
            rules={{required: true}}
            invalid={errors.last_name}
            message="هذا الحقل مطلوب"
          />
          <Input
            placeholder="السن"
            keyboardType="phone-pad"
            control={control}
            name="age"
            rules={{required: true}}
            invalid={errors.age}
            message="هذا الحقل مطلوب"
          />
          <Input
            placeholder="رقم الهاتف"
            keyboardType="phone-pad"
            control={control}
            name="phone"
            rules={{required: true}}
            invalid={errors.phone}
            message="هذا الحقل مطلوب"
          />
          <Input
            placeholder="البريد الالكتروني"
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            invalid={errors.email}
            message="يجب ان يكون عنوان بريد الكتروني صالح"
          />
          <Input
            placeholder="البلد"
            control={control}
            name="country"
            editable={false}
          />
          <Input
            placeholder="كلمة المرور"
            isSecure
            control={control}
            name="password"
            rules={{
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            }}
            invalid={errors.password}
            message="كلمة المرور يجب ان تتكون من حرف كبير وحرف صغير ورقم"
          />
          <Picker
            selectedValue={genderController.field.value}
            style={{color: "#fff"}}
            onValueChange={genderController.field.onChange}>
            <Picker.Item label="ذكر" value="Male" fontFamily="Cairo" />
            <Picker.Item label="انثي" value="Female" fontFamily="Cairo" />
            <Picker.Item label="اخري" value="Other" fontFamily="Cairo" />
          </Picker>

          <CountryPicker
            theme={DARK_THEME}
            withFilter
            withFlag
            withCloseButton
            onSelect={c => countryController.field.onChange(c.name)}
            containerButtonStyle={{
              height: 56,
              backgroundColor: "#222",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
              borderRadius: 8,
              marginTop: 8,
            }}
          />
          <Button
            onPress={handleSubmit(regsier)}
            title="انشاء"
            loading={loading}
          />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

export default CreateUser;
