import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class ComplementRegisterInput extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View> 
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Complemento"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}