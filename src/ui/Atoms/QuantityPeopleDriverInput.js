import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class QuantityPeopleDriver extends Component {
    render() {
        return (
            <View>  
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Quantidade máxima de pessoas"
                    keyboardType="text"
                />
            </View>
        )
    }
}