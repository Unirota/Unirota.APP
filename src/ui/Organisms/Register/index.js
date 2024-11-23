import { Component } from 'react'
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import HeaderRegister from '../../Molecules/HeaderRegister';
import PhotoUserRegister from '../../Atoms/PhotoUserRegister';
import FormRegister from '../../Molecules/FormRegister';
import BlueLine from '../../Atoms/BlueLine';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.goToHome = this.goToHome.bind(this)
        this.goToLogin = this.goToLogin.bind(this)
    }

    goToHome() {
        this.props.navigation.replace("HomePage")
    }

    goToLogin(){
        this.props.navigation.replace("LoginPage")
    }

    render() {
        return (
            <LinearGradient
                colors={['#00B5AA', '#00112B']}
                locations={[0.0, 0.6]}
                style={styles.gradient}
            >
                <FormRegister goToLogin={this.goToLogin}/>
                {/* <FormLogin goToHome={this.goToHome} /> */}
                
            </LinearGradient>
        )
    }
}