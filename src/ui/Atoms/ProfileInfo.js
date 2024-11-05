import { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/Atoms/ProfileInfoStyles'

export default class ProfileInfo extends Component {
  render() {
    const { years, rides } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Usuária há {years} ano</Text>
        <Text style={styles.text}>{rides} corridas</Text>
      </View>
    )
  }
}
