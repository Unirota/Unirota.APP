import { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles/Atoms/ProfileMenuItemStyles'

export default class ProfileMenuItem extends Component {
  render() {
    const { icon, title } = this.props.data
    const { isFirstItem } = this.props

    return (
      <TouchableOpacity
        style={[styles.container, isFirstItem && styles.firstItem]}
      >
        <Ionicons
          name={icon}
          size={24}
          color={isFirstItem ? '#fff' : '#1E1E1E'}
          style={styles.icon}
        />
        <Text style={[styles.text, isFirstItem && styles.firstItemText]}>
          {title}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={isFirstItem ? '#fff' : '#1E1E1E'}
        />
      </TouchableOpacity>
    )
  }
}
