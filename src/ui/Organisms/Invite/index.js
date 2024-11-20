import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Invite/styles'
import PageInvite from '../../Molecules/InvitePage'
import InviteUnirotaTitle from '../../Atoms/InviteUnirotaTitle'


export default class InvitePage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <InviteUnirotaTitle/>
          <PageInvite/>
        </View>
        <NavigationFooter navigation={this.props.navigation} />
      </LinearGradient>
    )
  }
}
