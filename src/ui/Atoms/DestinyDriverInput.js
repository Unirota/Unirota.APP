import { Component } from 'react'
import { View, TextInput } from 'react-native'
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';

export default class DestinyDriverInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={LoginInputStyles.container}>
                <TextInput
                    style={LoginInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Destino"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>

        )
    }
}