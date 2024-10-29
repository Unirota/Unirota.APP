import { Component } from 'react'
import { View } from 'react-native'
import DriverProfileAvatar from '../Atoms/DriverProfileAvatar'
import DriverProfileBadge from '../Atoms/DriverProfileBadge'
import DriverProfileName from '../Atoms/DriverProfileName'
import DriverProfileInfo from '../Atoms/DriverProfileInfo'
import styles from '../../styles/Molecules/ProfileHeaderStyles'

export default class DriverProfileHeader extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <DriverProfileAvatar
            data={require('../../../assets/images/driver_avatar.png')}
          />
          <View style={styles.profileContentContainer}>
            <DriverProfileBadge />
            <DriverProfileName name="João Pedro" />
            <DriverProfileInfo years={2} rides={50} />
          </View>
        </View>
      </View>
    )
  }
}
