import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';
import styles from '../../styles/Organisms/Home/styles';

export default class CityRegisterInput extends Component {
    render() {
        return (
            <View style={styles.row}>  
                <TextInput
                    style={RegisterInputStyles.inputNeighborhood}
                    placeholderTextColor='black'
                    placeholder="Cidade"
                    keyboardType="text"
                />
                <TextInput
                    style={RegisterInputStyles.inputNumber}
                    placeholderTextColor='black'
                    placeholder="Estado"
                    keyboardType="text"
                />
            </View>
        )
    }
}