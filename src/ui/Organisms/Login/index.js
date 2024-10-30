import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import HeaderLogin from '../../Atoms/HeaderLogin';
import FormLogin from '../../Molecules/FormLogin';

export default class LoginPage extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#00B5AA', '#00112B']}
                locations={[0.0, 0.6]}
                style={styles.gradient}
            >
            <HeaderLogin />
            <FormLogin />

            </LinearGradient>
        )
    }
}