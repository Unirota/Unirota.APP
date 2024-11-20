import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class CarNumberInput extends Component {
    render() {
        return (
            <View> 
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Placa do veículo"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}