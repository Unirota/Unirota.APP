import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class DescriptionDriverInput extends Component {
    render() {
        return (
            <View>  
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Descrição (opcional)"
                    keyboardType="text"
                />
            </View>
        )
    }
}