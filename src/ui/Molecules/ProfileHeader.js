import { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import ProfileAvatar from '../Atoms/ProfileAvatar'
import ProfileBadge from '../Atoms/ProfileBadge'
import ProfileName from '../Atoms/ProfileName'
import ProfileInfo from '../Atoms/ProfileInfo'
import styles from '../../styles/Molecules/ProfileHeaderStyles'

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state ={
      headerData: null
    }
  }
  
  render() {
    const { headerData } = this.props;

    if (headerData === null) {
      return (
        <View>
          <ActivityIndicator size="large" color="#00BBAA" />
        </View>
      )
    }

    const { nome, corridas, createdAt } = headerData;

    const tempoUsuario = new Date(createdAt).getFullYear() - new Date().getFullYear()

    return (
      <View>
        <View style={styles.container}>
          <ProfileAvatar
            data={require('../../../assets/images/user_avatar.png')}
          />
          <View style={styles.profileContentContainer}>
            <ProfileBadge />
            <ProfileName name={nome} />
            <ProfileInfo years={tempoUsuario} rides={corridas} />
          </View>
        </View>
      </View>
    )
  }
}
