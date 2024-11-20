import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';
import styles from '../../styles/Organisms/Home/styles';

export default class NeighborhoodRegisterInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={RegisterInputStyles.row}>
                <TextInput
                    style={RegisterInputStyles.inputNeighborhood}
                    placeholderTextColor='black'
                    placeholder="Bairro"
                    keyboardType="text"
                    onChangeText={this.props.onChangeTextNeighborhood}
                />
                <TextInput
                    style={RegisterInputStyles.inputNumber}
                    placeholderTextColor='black'
                    placeholder="Número"
                    keyboardType="text"
                    onChangeText={this.props.onChangeTextNumber}
                />
            </View>
        )
    }
}