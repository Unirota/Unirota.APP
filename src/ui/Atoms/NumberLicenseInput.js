import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class NumberLicenseInput extends Component {
    render() {
        return (
            <View> 
                <Text style={[
                    HeaderLoginStyle.commonSubtitleLogin,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.subtitleRegister,
                    ]}>
                    Informações
                </Text>
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Número da habilitação"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}