import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class CEPRegisterInput extends Component {
    render() {
        return (
            <View> 
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="CEP"
                    keyboardType="text"
                />
            </View>
        )
    }
}