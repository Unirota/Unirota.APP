import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Atoms/SearchGroupInfoButtonStyles'

const InfoButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Informações</Text>
  </TouchableOpacity>
)

export default InfoButton