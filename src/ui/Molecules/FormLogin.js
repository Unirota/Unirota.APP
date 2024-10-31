import { Component } from "react";
import { View, Alert } from "react-native";
import InputEmail from "../Atoms/InputEmail";
import InputSenha from "../Atoms/InputSenha";
import LoginFormStyles from "../../styles/Molecules/LoginFormStyles";
import LabelResetPassword from "../Atoms/LabelResetPassword";
import ButtonLogin from "../Atoms/ButtonLogin";
import ButtonDontHaveAccount from "../Atoms/ButtonDontHaveAccount";
import LoginPageService from "../../services/LoginPageService";

export default class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.Login = this.Login.bind(this)
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    async Login() {
        const { email, password } = this.state

        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const response = await LoginPageService.Login(email, password)
        if(response){
            this.props.goToHome()
        }
    }

    render() {
        return (
            <View style={LoginFormStyles.container}>
                <View style={LoginFormStyles.inputContainer}>
                    <InputEmail onChangeText={this.handleEmailChange} />
                    <InputSenha onChangeText={this.handlePasswordChange} />
                    <LabelResetPassword />
                </View>
                <View>
                    <ButtonLogin onPress={this.Login} />
                    <ButtonDontHaveAccount />
                </View>
            </View>
        )
    }
}