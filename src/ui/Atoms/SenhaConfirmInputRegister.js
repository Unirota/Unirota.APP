import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles";

export default class SenhaConfirmInputRegister extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TextInput
                secureTextEntry={true}
                style={RegisterInputStyles.input}
                placeholderTextColor='black'
                placeholder="Confirmar senha"
                keyboardType="text"
                onChangeText={this.props.onChangeText}
            />

        )
    }
}