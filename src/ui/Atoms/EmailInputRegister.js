import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput } from "react-native"
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles"

export default class EmailInputRegister extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="E-mail"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>

        )
    }
}