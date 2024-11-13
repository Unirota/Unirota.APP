import { Component } from 'react'
import { View, TextInput } from 'react-native'
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';
import styles from '../../styles/Organisms/Home/styles';

export default class CityRegisterInput extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.row}>  
                <TextInput
                    style={RegisterInputStyles.inputNeighborhood}
                    placeholderTextColor='black'
                    placeholder="Cidade"
                    keyboardType="text"
                    onChangeText={this.props.onChangeTextCity}
                />
                <TextInput
                    style={RegisterInputStyles.inputNumber}
                    placeholderTextColor='black'
                    placeholder="Estado"
                    keyboardType="text"
                    onChangeText={this.props.onChangeTextState}
                />
            </View>
        )
    }
}