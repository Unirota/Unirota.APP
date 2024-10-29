import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DriverProfileHeader from '../../Molecules/DriverProfileHeader'
import DriverProfileMenu from '../../Molecules/DriverProfileMenu'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Profile/styles'
import UnirotaTitle from '../../Atoms/UnirotaTitle'

export default class DriverProfilePage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <DriverProfileHeader />
          <DriverProfileMenu />
        </View>
        <NavigationFooter />
      </LinearGradient>
    )
  }
}
