import { Component } from 'react'
import { View } from 'react-native'
import ProfileAvatar from '../Atoms/ProfileAvatar'
import ProfileBadge from '../Atoms/ProfileBadge'
import ProfileName from '../Atoms/ProfileName'
import ProfileInfo from '../Atoms/ProfileInfo'
import styles from '../../styles/Molecules/ProfileHeaderStyles'

export default class ProfileHeader extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ProfileAvatar
            data={require('../../../assets/images/unicesumarImage.jpeg')}
          />
          <View style={styles.profileContentContainer}>
            <ProfileBadge />
            <ProfileName name="João Pedro" />
            <ProfileInfo years={2} rides={50} />
          </View>
        </View>
      </View>
    )
  }
}
