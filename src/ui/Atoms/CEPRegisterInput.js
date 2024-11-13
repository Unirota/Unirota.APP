import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class CEPRegisterInput extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View> 
                <TextInput
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="CEP"
                    keyboardType="text"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}