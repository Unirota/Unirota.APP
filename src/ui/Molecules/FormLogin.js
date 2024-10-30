import { Component } from "react";
import { View, Text } from "react-native";
import InputEmail from "../Atoms/InputEmail";
import InputSenha from "../Atoms/InputSenha";
import LoginFormStyles from "../../styles/Molecules/LoginFormStyles";
import LabelResetPassword from "../Atoms/LabelResetPassword";
import ButtonLogin from "../Atoms/ButtonLogin";
import ButtonDontHaveAccount from "../Atoms/ButtonDontHaveAccount";

export default class FormLogin extends Component {
    render() {
        return (
            <View style={LoginFormStyles.container}>
                <View style={LoginFormStyles.inputContainer}>
                    <InputEmail />
                    <InputSenha />
                    <LabelResetPassword/>
                </View>
                <View>
                    <ButtonLogin/>
                    <ButtonDontHaveAccount/>
                </View>
            </View>
        )
    }
}