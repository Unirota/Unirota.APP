import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupAvatarStyles'

const GroupAvatar = () => (
  <View style={styles.avatarContainer}>
    <Icon name="photo-camera" size={24} color="#666" />
  </View>
)

export default GroupAvatar