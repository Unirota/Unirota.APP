import { Component } from 'react'
import { View, Image } from 'react-native'
import styles from '../../styles/Atoms/ProfileAvatarStyles'

export default class DriverProfileAvatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.data} />
      </View>
    )
  }
}
