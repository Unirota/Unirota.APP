import { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class NameGroupDriverInput extends Component {
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
                    placeholder="Nome do Grupo"
                    keyboardType="text"
                />
            </View>
        )
    }
}