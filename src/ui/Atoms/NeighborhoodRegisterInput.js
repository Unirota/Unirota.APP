import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';
import styles from '../../styles/Organisms/Home/styles';

export default class NeighborhoodRegisterInput extends Component {
    render() {
        return (
            <View style={styles.row}>  
                <TextInput
                    style={RegisterInputStyles.inputNeighborhood}
                    placeholderTextColor='black'
                    placeholder="Bairro"
                    keyboardType="text"
                />
                <TextInput
                    style={RegisterInputStyles.inputNumber}
                    placeholderTextColor='black'
                    placeholder="Número"
                    keyboardType="text"
                />
            </View>
        )
    }
}