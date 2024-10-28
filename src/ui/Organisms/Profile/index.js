import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ProfileHeader from '../../Molecules/ProfileHeader'
import ProfileMenu from '../../Molecules/ProfileMenu'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Profile/styles'
import UnirotaTitle from '../../Atoms/UnirotaTitle'

export default class ProfilePage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <ProfileHeader />
          <ProfileMenu />
        </View>
        <NavigationFooter />
      </LinearGradient>
    )
  }
}
