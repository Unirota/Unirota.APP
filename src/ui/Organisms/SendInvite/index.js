import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../../styles/Organisms/SendInvite/styles'
import SendInviteUser from '../../Molecules/SendInviteUser';
import SendEnviteUserLogo from '../../Atoms/SendInviteUserLogo';

export default class SendInvitePage extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                locations={[0.0, 0.6]}
                style={styles.gradient}
            >

            <SendEnviteUserLogo/>
            <SendInviteUser/>
            </LinearGradient>
        )
    }
}