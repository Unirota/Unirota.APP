import { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/Atoms/ProfileBadgeStyles'

export default class ProfileBadge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>passageiro</Text>
      </View>
    )
  }
}
