import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"

export default class InputSenha extends Component {

    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    secureTextEntry = {true}
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Senha"
                    keyboardType="text"
                />
            </View>

        )
    }
}