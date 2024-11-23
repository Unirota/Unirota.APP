import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import HeaderLogin from '../../Atoms/HeaderLogin';
import FormLogin from '../../Molecules/FormLogin';

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.goToHome = this.goToHome.bind(this)
        this.goToRegister = this.goToRegister.bind(this)
    }

    goToHome() {
        this.props.navigation.replace("HomePage")
    }

    goToRegister(){
        this.props.navigation.navigate("RegisterPage")
    }

    render() {
        return (
            <LinearGradient
                colors={['#00B5AA', '#00112B']}
                locations={[0.0, 0.6]}
                style={styles.gradient}
            >
                <HeaderLogin />
                <FormLogin goToHome={this.goToHome} goToRegister={this.goToRegister} />

            </LinearGradient>
        )
    }
}