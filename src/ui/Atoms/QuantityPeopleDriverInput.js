import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';

export default class QuantityPeopleGroup extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.validateInput = this.validateInput.bind(this)
    }

    validateInput = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "");
        this.setState({value: numericValue})
        this.props.onChangeText(numericValue)
    }

    render() {
        return (
            <View>  
                <TextInput
                    keyboardType="numeric"
                    style={RegisterInputStyles.input}
                    placeholderTextColor='black'
                    placeholder="Quantidade máxima de pessoas"
                    inputMode='numeric'
                    value={this.state.value}
                    onChangeText={this.validateInput}
                />
            </View>
        )
    }
}