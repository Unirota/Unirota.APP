import { Component } from 'react'
import { View } from 'react-native'
import DriverProfileAvatar from '../Atoms/DriverProfileAvatar'
import DriverProfileBadge from '../Atoms/DriverProfileBadge'
import DriverProfileName from '../Atoms/DriverProfileName'
import DriverProfileInfo from '../Atoms/DriverProfileInfo'
import styles from '../../styles/Molecules/ProfileHeaderStyles'
import Loading from '../Atoms/Loading'

export default class DriverProfileHeader extends Component {
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
        <Loading />
      )
    }

    const { nome, corridas, createdAt } = headerData;

    const tempoUsuario = new Date(createdAt).getFullYear() - new Date().getFullYear()

    return (
      <View>
        <View style={styles.container}>
          {/* <DriverProfileAvatar
            data={require('../../../assets/images/driver_avatar.png')}
          /> */}
          <View style={styles.profileContentContainer}>
            <DriverProfileBadge />
            <DriverProfileName name={nome} />
            <DriverProfileInfo years={tempoUsuario} rides={corridas} />
          </View>
        </View>
      </View>
    )
  }
}
