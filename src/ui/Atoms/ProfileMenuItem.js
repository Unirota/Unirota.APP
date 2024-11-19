import { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles/Atoms/ProfileMenuItemStyles'

export default class ProfileMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.data.icon,
      title: this.props.data.title,
      id: this.props.data.id,
      isFirstItem: this.props.isFirstItem,
      onLogout: this.props.onLogout,
    };
  }

  render() {
    const { icon, title, id, isFirstItem, onLogout } = this.state;

    return (
      <TouchableOpacity
        style={[styles.container, isFirstItem && styles.firstItem]}
        onPress={onLogout}
      >
        <Ionicons
          name={icon}
          size={24}
          color={isFirstItem ? '#fff' :  id === '5' ? 'red' : '#1E1E1E'}
          style={styles.icon}
        />
        <Text style={[styles.text, isFirstItem && styles.firstItemText, id === '5' && styles.colorRedText]}>
          {title}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={isFirstItem ? '#fff' :  id === '5' ? 'red' : '#1E1E1E'}
        />
      </TouchableOpacity>
    )
  }
}
