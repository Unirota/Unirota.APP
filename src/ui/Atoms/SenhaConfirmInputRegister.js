import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"

export default class SenhaConfirmInputRegister extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    secureTextEntry={true}
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Confirmar senha"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>

        )
    }
}