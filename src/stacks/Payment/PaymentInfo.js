import React, { useState } from "react";
import { Image, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppBar from "../../components/AppBar";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
import { TextInputMask } from 'react-native-masked-text'
const RadioButton = ({ active }) => (
    <View style={{ borderColor: colors.primary, borderWidth: 2, width: 20, height: 20, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: colors.primary, width: active ? 12 : 0, height: active ? 12 : 0, borderRadius: 12 / 2 }}></View>
    </View>
)

const PaymentInfo = ({ navigation }) => {
    const [state, setState] = useState({
        date: ""
    })
    return (
        <Screen statusBarBg="#000" bg="#000">
            <AppBar title="فيزا" />

            <View style={styles.content}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}>
                    <TextInputMask onChangeText={(text) => {
                        setState(prev => ({ ...prev, date: text }))
                    }} value={state.date} style={{ padding: 12, flex: 1, borderColor: colors.primary, borderWidth: 1, borderRadius: 8, fontFamily: 'Cairo' }} type="datetime" options={{ format: "YY/MM" }} placeholder="YY/MM" placeholderTextColor={"#999"} />
                    <TextInputMask onChangeText={(text) => {
                        setState(prev => ({ ...prev, date: text }))
                    }} value={state.date} style={{ padding: 12, flex: 1, borderColor: colors.primary, borderWidth: 1, borderRadius: 8, fontFamily: 'Cairo' }} type="datetime" options={{ format: "YY/MM" }} placeholder="YY/MM" placeholderTextColor={"#999"} />

                </View>

            </View>
            <View style={{ alignSelf: 'stretch', padding: 24 }}>

                <Button title="دفع" onPress={() => navigation.navigate("Done")} />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    header: {
        alignSelf: "center",
    },
    content: {
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 24
    },

});

export default PaymentInfo;
