import LoginInputStyles from "../../styles/Atoms/LoginInputStyles"
import { Component } from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class InputSenha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        }
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    };

    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    secureTextEntry={!this.state.showPassword}
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Senha"
                    keyboardType="default"
                    onChangeText={this.props.onChangeText}
                />
                <TouchableOpacity
                    style={LoginInputStyles.passwordEyeIcon}
                    onPress={this.togglePasswordVisibility}
                >
                    <Icon 
                        name={this.state.showPassword ? "visibility" : "visibility-off"} 
                        size={24} 
                        color="#666" 
                    />
                </TouchableOpacity>
            </View>
        )
    }
}