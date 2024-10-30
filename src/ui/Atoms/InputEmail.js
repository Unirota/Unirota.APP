import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"

export default class InputEmail extends Component {

    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="E-mail"
                    keyboardType="text"
                />
            </View>

        )
    }
}