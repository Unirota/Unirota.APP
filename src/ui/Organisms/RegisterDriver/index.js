import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import FormRegisterDriver from '../../Molecules/FormRegisterDriver';
import NavigationFooter from '../../Molecules/NavigationFooter';

export default class RegisterDriverPage extends Component {
    constructor(props) {
        super(props)
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
                <FormRegisterDriver navigation={this.props.navigation}/>
                {/* <FormLogin goToHome={this.goToHome} /> */}
            <NavigationFooter navigation={this.props.navigation}/>
            </LinearGradient>
        )
    }
}