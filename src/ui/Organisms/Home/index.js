import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import CardDestiny from '../../Molecules/CardDestiny';
import styles from '../../../styles/Organisms/Home/styles'
import CardHomeGroup from '../../Molecules/CardHomeGroup';
import NavigationFooter from '../../Molecules/NavigationFooter';

export default class HomePage extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                style={styles.gradient}
            >
                <View style={styles.container}>
                    <UnirotaTitle />
                    <CardDestiny />
                    <CardHomeGroup />
                    <ButtonLogin/>
                </View>
                <NavigationFooter />
            </LinearGradient>
        )
    }
}