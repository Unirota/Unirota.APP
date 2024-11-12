import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import FormRegisterGroup from '../../Molecules/FormRegisterDriver';

export default class RegisterGroupPage extends Component {
    constructor(props) {
        super(props)
        this.goToHome = this.goToHome.bind(this)
    }

    goToHome() {
        this.props.navigation.replace("HomePage")
    }

    render() {
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                locations={[0.0, 0.6]}
                style={styles.gradient}
            >
            <FormRegisterGroup/>
                {/* <FormLogin goToHome={this.goToHome} /> */}
                
            </LinearGradient>
        )
    }
}