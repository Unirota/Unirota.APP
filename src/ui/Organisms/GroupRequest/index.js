import { Component } from 'react'
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/Home/styles'
import GroupRequestContainer from '../../Molecules/GroupRequestContainer';

export default class GroupRequestPage extends Component {
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
                colors={['#00112B', '#003A90']}
                locations={[0.0, 0.9]}
                style={styles.gradient}
            >
                
                <GroupRequestContainer goToHome={this.goToHome}/>
                
            </LinearGradient>
        )
    }
}