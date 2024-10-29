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
            data={require('../../../assets/images/user_avatar.png')}
          />
          <View style={styles.profileContentContainer}>
            <ProfileBadge />
            <ProfileName name="Maria Silva" />
            <ProfileInfo years={1} rides={23} />
          </View>
        </View>
      </View>
    )
  }
}
