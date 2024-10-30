import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, Text } from "react-native"
import ResetPasswordStyles from "../../styles/Atoms/ResetPasswordStyles"

export default class LabelResetPassword extends Component {

    render() {
        return (
            <View>
                <Text style={ResetPasswordStyles.resetPassword}>Esqueci minha senha</Text>
            </View>
        )
    }
}