import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Atoms/SearchGroupInfoButtonStyles'
import { LinearGradient } from 'expo-linear-gradient'

const InfoButton = ({ onPress }) => (
  <LinearGradient colors={['#008E86', '#007DF0']} style={styles.gradient}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Informações</Text>
    </TouchableOpacity>
  </LinearGradient>
)

export default InfoButton

