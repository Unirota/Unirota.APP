import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"

export default class InputEmail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="E-mail"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>

        )
    }
}