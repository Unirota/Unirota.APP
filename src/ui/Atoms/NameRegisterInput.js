import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class NameRegisterInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text style={[
                    HeaderLoginStyle.commonSubtitleLogin,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.subtitleRegister,
                ]}>
                    Dados Pessoais
                </Text>
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Nome Completo"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}