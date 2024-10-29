import { Component } from 'react'
import { Text } from 'react-native'
import styles from '../../styles/Atoms/ProfileNameStyles'

export default class DriverProfileName extends Component {
  render() {
    return <Text style={styles.text}>{this.props.name}</Text>
  }
}
